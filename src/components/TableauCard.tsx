'use client';

import { Painting } from '@/models/Painting';

interface TableauCardProps {
  painting: Painting;
  getInformations: boolean;
}

export default function TableauCard({ painting, getInformations }: TableauCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <div className="w-full overflow-hidden rounded-2xl shadow-md">
        <img
          src={painting.image_url}
          alt={painting.name}
          className="w-full h-auto object-contain"
        />
      </div>

      {getInformations && (
        <div className="p-4">
          <h2 className="text-xl font-semibold truncate">{painting.name}</h2>
          <p className="text-sm text-gray-600">{painting.year}</p>
          {painting.description && (
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">{painting.description}</p>
          )}
        </div>
      )}
    </div>
  );
}
