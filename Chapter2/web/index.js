import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};



app.use(cors(corsOptions));

// Default route
app.get('/', (req, res) => {
    res.send('Server is ready');
});

// Jokes API route
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Why did the scarecrow win an award?',
            content: 'Because he was outstanding in his field!',
        },
        {
            id: 2,
            title: 'Why don’t scientists trust atoms?',
            content: 'Because they make up everything!',
        },
        {
            id: 3,
            title: 'Why did the bicycle fall over?',
            content: 'Because it was two-tired!',
        },
        {
            id: 4,
            title: 'What do you call fake spaghetti?',
            content: 'An impasta!',
        },
    ];

    res.json(jokes);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
