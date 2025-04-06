import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foll2Foll</title>
        <meta property="og:title" content="Foll2Foll - Let's Follow Each Other!" />
        <meta property="og:description" content="Join the Foll2Foll movement!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />
        <meta property="og:url" content="https://foll2foll.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Farcaster Frame Meta */}
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:version" content="vNext" />
        <meta name="fc:frame:creator" content="302592" />
        <meta name="fc:frame:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />

        {/* Tombol 1: Follow Me */}
        <meta name="fc:frame:button:1" content="Follow Me" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta name="fc:frame:button:1:target" content="https://warpcast.com/~/profile/302592" />

        {/* Tombol 2: Share */}
        <meta name="fc:frame:button:2" content="Share" />
        <meta name="fc:frame:button:2:action" content="post" />
        <meta name="fc:frame:button:2:post_url" content="https://foll2foll.vercel.app/" />
      </Head>

      <main>
        <h1>Welcome to Foll2Foll!</h1>
      </main>
    </>
  );
}
