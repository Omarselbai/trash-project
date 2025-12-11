export default function handler(req, res) {
  if (req.method === "POST") {
    const { type, weight } = req.body;
    if (!type || !weight) {
      res.status(400).json({ error: "Не указан тип или вес" });
      return;
    }
    // бонусы: 10 за кг, +5 если стекло
    let bonus = weight * 10;
    if (type.toLowerCase() === "стекло") bonus += 5;
    res.status(200).json({ bonus });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}