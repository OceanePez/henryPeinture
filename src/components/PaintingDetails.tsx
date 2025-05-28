import { Painting } from '@/models/Painting'; 
import { supabase } from '../lib/supabaseClient'

type PaintingDetailsProps = {
  painting: Painting;
  onClose: () => void;
};

export default function PaintingDetails({ painting, onClose }: PaintingDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold">{painting.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <img 
              src={painting.image_url} 
              alt={painting.name} 
              className="w-full h-auto object-contain max-h-[60vh]"
            />
          </div>
          
          <div className="md:w-1/2 p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">Artiste</h3>
              <p className="text-gray-600">Florence Henry</p>
            </div>
            
            {painting.description && (
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <p className="text-gray-600">{painting.description}</p>
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">Date d'ajout</h3>
              <p className="text-gray-600">
                {new Date(painting.created_at).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}