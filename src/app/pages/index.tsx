import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'

export type Image = {
  id: string;
  url: string;
  user_id: string | null;
  created_at: string;
};

export default function Home() {
    
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from<Image>('images')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur fetch images:', error.message);
    } else if (data) {
      setImages(data);
    }
    setLoading(false);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Galerie d'images</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(({ id, url }) => (
            <img key={id} src={url} alt="image" className="rounded shadow" />
          ))}
        </div>
      )}
    </main>
  );
}
