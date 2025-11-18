import { parse } from "querystring";
import { sql } from "@vercel/postgres";

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    let raw = "";

    req.on("data", chunk => raw += chunk);

    req.on("end", async () => {
        const data = parse(raw);   // { email: "...", name: "...", etc }

        try {
            // Insert dans la base
            await sql`
        INSERT INTO joins (json)
        VALUES (${JSON.stringify(data)})
      `;

            return res.status(200).json({ ok: true });

        } catch (err) {
            console.error("DB ERROR:", err);
            return res.status(500).json({ error: "Erreur serveur" });
        }
    });
}