import AccueilView from "@/components/AccueilView";
import Menu from "@/components/Menu";

import { supabase } from '@/lib/supabaseClient';

// async function testFetch() {
//   const { data, error } = await supabase.from('Paintings').select('*');
//   console.log('Test fetch data:', data);
//   console.log('Test fetch error:', error);
// }

// testFetch();

export default function Home() {
  return (
    <>
      <Menu />
      <main >
        <AccueilView />
      </main>
    </>
  );
}
