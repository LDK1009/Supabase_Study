import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tcztiagjrtxmsppxrtdb.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export default async function Home() {
  const { data, error } = await supabase
  .from('notes')
  .select()

  console.log(data);
  return (
    <main>
       <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
