export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
        const data = parse(body); // Form data
        console.log(data);
        res.status(200).json({ message: 'OK', data });
    });

    return res.status(200).json({ message: 'Formulaire bien reçu !' });
}