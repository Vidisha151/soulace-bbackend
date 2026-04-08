export default function handler(req, res) {
  try {
    res.status(200).json({
      message: "API working perfectly 🚀",
      name: "Vidisha"
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong"
    });
  }
}