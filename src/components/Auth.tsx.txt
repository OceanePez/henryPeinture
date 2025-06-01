import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Remplace par tes propres infos Supabase
const supabase = createClient(
  'https://YOUR_PROJECT_ID.supabase.co',
  'YOUR_PUBLIC_ANON_KEY'
);

export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [session, setSession] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase.from('images').select('*').order('created_at', { ascending: false });
    if (!error) setImages(data);
  };

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !session) return;
    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    const { error: uploadError } = await supabase.storage.from('images').upload(filePath, file);

    if (uploadError) {
      console.error('Erreur upload:', uploadError.message);
    } else {
      const { data } = supabase.storage.from('images').getPublicUrl(filePath);
      setImageUrl(data.publicUrl);

      await supabase.from('images').insert({
        url: data.publicUrl,
        user_id: session.user.id
      });

      fetchImages();
    }

    setUploading(false);
  };

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <button onClick={handleLogin} className="bg-black text-white px-4 py-2 rounded">
          Se connecter avec GitHub
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Upload d'image avec Supabase</h1>
      <button onClick={handleLogout} className="mb-4 text-sm underline">Se déconnecter</button>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={uploading}
      >
        {uploading ? 'Upload en cours...' : 'Uploader'}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <p>Image uploadée :</p>
          <img src={imageUrl} alt="upload" className="mt-2 max-w-xs rounded" />
        </div>
      )}

      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-2">Galerie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <img key={img.id} src={img.url} alt="" className="rounded shadow" />
          ))}
        </div>
      </div>
    </main>
  );
}
