const express = require("express");
const app = express();

app.use(express.json());

app.post("/join", (req, res) => {
    const { name, email, message } = req.body;

    console.log("Nouveau contact :", { name, email, message }, req.body);

    return res.json({ ok: true });
});

// export version serverless
module.exports = app;