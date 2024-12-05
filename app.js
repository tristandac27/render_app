const express = require('express');
const app = express();

// Définir une route pour gérer les requêtes GET
app.get('/API/:code', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const infos = {
        name: 'Express',
        email: 'tristandac28@gmail.com',
        code: req.params.code
    };
    res.json(infos);
});

// Définir le port à utiliser (Render définit automatiquement la variable d'environnement PORT)
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
