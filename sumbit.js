export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { type, weight } = req.body;

    const bonusRates = {
        plastic: 5,
        glass: 3,
        paper: 2,
        metal: 10
    };

    const bonus = (weight || 0) * (bonusRates[type] || 0);

    res.status(200).json({ success: true, bonus });
}