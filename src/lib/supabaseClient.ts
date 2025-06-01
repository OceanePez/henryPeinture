import { createClient } from '@supabase/supabase-js';

// Récupération des variables d'environnement pour Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Vérification des variables d'environnement
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Les variables d\'environnement Supabase ne sont pas définies.');
}

// Création du client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
