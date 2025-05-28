'use client';

import { useState, useEffect } from 'react';
import PaintingDetails from '@/components/PaintingDetails';
import { Painting } from '@/models/Painting';
import tableauxStore from '@/stores/Tableaux';

export default function Home() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const { tableaux , fetchTableaux, loading} = tableauxStore()
 
 
  useEffect(() => {
    fetchTableaux();
  }, [fetchTableaux]);


  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">Galerie de Peintures</h1>
        <p className="text-center text-gray-600 mt-2">Découvrez notre collection de peintures</p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Chargement des peintures...</p>
        </div>
      ) : tableaux.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl">Aucune peinture trouvée.</p>
          <p className="mt-2 text-gray-600">Veuillez ajouter des peintures à votre collection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tableaux.map((painting: Painting) => (
            <div 
              key={painting.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedPainting(painting)}
            >
              <div className="relative h-48">
                <img
                  src={painting.image_url}
                  alt={painting.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{painting.name}</h2>
                <p className="text-sm text-gray-600">{painting.year}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(painting.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPainting && (
        <PaintingDetails 
          painting={selectedPainting} 
          onClose={() => setSelectedPainting(null)} 
        />
      )}
    </div>
  );
}