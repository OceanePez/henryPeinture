// stores/Tableaux.ts
import { create } from 'zustand';
import { supabase } from '@/lib/supabaseClient';
import { Painting } from '../models/Painting'; // ✅ préfère un fichier de modèle

export interface TableauxState {
  tableaux: Painting[];
  loading: boolean;
  error: string | null;
  fetchTableaux: () => Promise<void>;
}

const tableauxStore = create<TableauxState>((set) => ({
  tableaux: [],
  loading: false,
  error: null,

  fetchTableaux: async () => {
    set({ loading: true, error: null });

    try {
      const { data, error } = await supabase
        .from('Paintings')
        .select('*');

      if (error) {
        console.error('Erreur lors de la récupération des peintures:', error.message);
        set({ error: error.message, loading: false });
        return;
      }

      if (data) {
        const transformedData: Painting[] = data.map((item: Painting) => ({
          id: item.id,
          name: item.name || 'Sans titre',
          description: item.description,
          image_url: item.image_url,
          created_at: item.created_at,
          year: item.year,
        }));

        set({ tableaux: transformedData, loading: false });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      } else {
        set({ error: 'Une erreur inconnue est survenue.', loading: false });
      }
    }
  },
}));

export default tableauxStore;
