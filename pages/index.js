import Landing from "../components/interfaces/Home/Landing";

export default function Home({supabaseKey}) {
  return (
    <>
      <Landing supabaseKey={supabaseKey}/>
    </>
  );
}

export async function getServerSideProps() {
  const supabaseKey = process.env.SUPABASE_KEY;
  console.log(`key issss ${supabaseKey}`)
  return {
    props: {
      supabaseKey,
    }
  }
}