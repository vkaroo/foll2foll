import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foll2Foll</title>

        {/* OG Tags */}
        <meta property="og:title" content="Foll2Foll - Let's Follow Each Other!" />
        <meta property="og:description" content="Join the Foll2Foll movement!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />
        <meta property="og:url" content="https://foll2foll.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Farcaster Frame Meta */}
        <meta property="fc:frame:version" content="vNext" />
        <meta property="fc:frame:creator" content="302592" />
        <meta property="fc:frame:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />
        
        <meta property="fc:frame:button:1" content="Share this post" />
        <meta property="fc:frame:post_url" content="https://warpcast.com/~/share?text=Join%20the%20Foll2Foll%20movement!" />
      </Head>

      <main>
        <h1>Welcome to Foll2Foll!</h1>
        <p>Let's grow together by sharing Foll2Foll!</p>
      </main>
    </>
  );
}
