import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foll2Foll</title>
        <meta property="og:title" content="Foll2Foll - Let's Follow Each Other!" />
        <meta property="og:description" content="Join the Foll2Foll movement!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />
        
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:creator" content="302592" />
        <meta name="fc:frame:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />

        <meta name="fc:frame:button:1" content="Follow Me" />
        <meta name="fc:frame:button:2" content="Share" />
        
        <meta name="fc:frame:post_url" content="https://warpcast.com/~/profile/302592" />
        <meta name="fc:frame:button:2:action" content="share" />
      </Head>

      <main>
        <h1>Welcome to Foll2Foll!</h1>
      </main>
    </>
  );
}
