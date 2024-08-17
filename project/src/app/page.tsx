import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tcztiagjrtxmsppxrtdb.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export default async function Home() {
  const { error } = await supabase
    .from('notes')
    .insert({ title: 'test3' })

  console.log(error);
  return (
    <main>
      <div>test</div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}
