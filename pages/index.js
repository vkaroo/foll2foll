import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foll2Foll</title>
        <meta property="og:title" content="Foll2Foll - Let's Follow Each Other!" />
        <meta property="og:description" content="Join the Foll2Foll movement and grow your network!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />
        
        <meta property="fc:frame:creator" content="302592" />
        <meta property="fc:frame:image" content="https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png" />

        <meta property="fc:frame:button:1" content="Share Foll2Foll" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://warpcast.com/~/compose?text=Join%20the%20Foll2Foll%20movement%20with%20me!%20https://foll2foll.vercel.app" />
      </Head>

      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to Foll2Foll!</h1>
        <p>Connect, grow, and follow each other. Let's build a stronger community together!</p>
      </main>
    </>
  );
}
