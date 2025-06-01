'use client';

import { Painting
 } from "@/models/Painting";
import { useState } from "react";
import PaintingDetails from "../PaintingDetails";
 
type PaintingCardProps = {
  paintingSelected: Painting;

};
export default function PaintingCard({paintingSelected} : PaintingCardProps) {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  return (
        <div
                  key={paintingSelected.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedPainting(paintingSelected)}
                >
                  <div className="relative h-48">
                    <img
                      src={paintingSelected.image_url}
                      alt={paintingSelected.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold truncate">{paintingSelected.name}</h2>
                    <p className="text-sm text-gray-600">{paintingSelected.year}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(paintingSelected.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
            {selectedPainting && (
                <PaintingDetails
                painting={selectedPainting}
                onClose={() => setSelectedPainting(null)}
                />
            )}
                </div>

  );
}