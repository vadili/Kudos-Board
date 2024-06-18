const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send( `
    <html>
        <head>
            <title>Test</title>
        </head>

        <body>
            <h1>Hello World!</h1>
            <p>This is a test page</p>
        </body>
    </html>`)
});

app.post('/api/create', async (req, res) => {
    try {
        const { title, category, author } = req.body;
        const newPost = await prisma.board.create({
            data: { title, category, author }
        });
        res.json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
