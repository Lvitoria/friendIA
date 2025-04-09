import express, { Response, Request } from 'express';
import path from 'path'
import { chatWithOpenAI } from './api';
import cors from 'cors';
import dontev from 'dotenv';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dontev.config();


app.use(express.static(path.join(__dirname, './static')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

interface ChatRequestBody {
    messages: Array<{
        role: string;
        content: string;
    }>;
    system_message: string;
    temperature: number;
    max_tokens: number;
}
app.post('/api/chat', async (req: Request, res: Response): Promise<any> => {

    const { messages, system_message, temperature, max_tokens } = req.body as ChatRequestBody;

    

    if (!messages) {
        return res.status(400).json({ error: 'Mensagem não fornecida' });
    }

    const response = await chatWithOpenAI({ messages }, system_message, temperature, max_tokens);
    res.json({ response });

});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});