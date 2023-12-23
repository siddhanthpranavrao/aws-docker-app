const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello Docker!!! 🐳🐳🐳'});
});

app.post('/', (req, res) => {
    res.status(200).json({ message: 'Hello Docker!!! 🐳🐳🐳'});
});

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));``