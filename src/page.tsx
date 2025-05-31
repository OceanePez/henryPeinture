'use client';

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabaseClient';
import AccueilView from './components/AccueilView';
export type Painting = {
  id: string;
  name: string;
  year: string;
  description?: string;
  image_url: string;
  created_at: string;
};

export default function Home() {
  const [, setPaintings] = useState<Painting[]>([]);
  const [, setLoading] = useState(true);
  const [, ] = useState<Painting | null>(null);

  useEffect(() => {
    fetchPaintings();
  }, []);

  const fetchPaintings = async () => {
    try {


      // Fetch data from the 'images' table
   const { data, error } = await supabase
  .from('Paintings')
  .select('*')

      if (error) {
        console.error('Erreur lors de la récupération des peintures:', error.message);
        return;
      }
      console.table("tttt"+data)

      if (data) {
        console.table(data)

        // Transform the data to match the Painting type
        const transformedData: Painting[] = data.map(item => ({
          id: item.id,
          name: item.name || 'Sans titre', // Use a default title if not available
          description: item.description,
          image_url: item.image_url, // Map the url field to image_url
          created_at: item.created_at,
          year: item.year
        }));

        setPaintings(transformedData);
      }
    } catch (error) {
      console.error('Erreur inattendue:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AccueilView></AccueilView>
//     <div className="min-h-screen p-8">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold text-center">Galerie de Peintures</h1>
//         <p className="text-center text-gray-600 mt-2">Découvrez notre collection de peintures</p>
//       </header>

// <ResumeAnime/>
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <p className="text-xl">Chargement des peintures...</p>
//         </div>
//       ) : paintings.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl">Aucune peinture trouvée.</p>
//           <p className="mt-2 text-gray-600">Veuillez ajouter des peintures à votre collection.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {paintings.map((painting) => (
//             <div 
//               key={painting.id} 
//               className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
//               onClick={() => setSelectedPainting(painting)}
//             >
//               <div className="relative h-48">
//                 <img
//                   src={painting.image_url}
//                   alt={painting.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold truncate">{painting.name}</h2>
//                 <p className="text-sm text-gray-600">{painting.year}</p>
//                 <p className="text-xs text-gray-500 mt-2">
//                   {new Date(painting.created_at).toLocaleDateString('fr-FR')}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {selectedPainting && (
//         <PaintingDetails 
//           painting={selectedPainting} 
//           onClose={() => setSelectedPainting(null)} 
//         />
//       )}
//     </div>
  );
}