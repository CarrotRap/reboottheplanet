const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("Nouveau contact :", { name, email, message });

    return res.json({ ok: true });
});

// export version serverless
module.exports = app;