export default function handler(req, res) {
  // Kalau request bukan POST, return error
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Ini balasan standar Frame
  res.status(200).json({
    type: "frame",
    frames: [
      {
        image: "https://raw.githubusercontent.com/vkaroo/foll2foll/main/handshake.png",
        buttons: [
          {
            label: "Visit Foll2Foll",
            action: "link",
            target: "https://foll2foll.vercel.app/"
          }
        ]
      }
    ]
  });
}
