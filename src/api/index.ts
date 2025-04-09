import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

console.log('API Key:', apiKey);
if (!apiKey) {
  throw new Error('API key is not defined. Please set the OPENAI_API_KEY environment variable.');
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    message: ChatMessage;
    finish_reason: string;
    index: number;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

interface IMessage {
  messages: Array<{
    role: string;
    content: string;
  }>
}

export const chatWithOpenAI = async (
  messages: IMessage,
  system_message: string,
  temperature: number,
  max_tokens: number
) => {
  try {

    let payloadRequest = [
      { role: 'system', content: system_message || 'Você é um assistente útil.' },
      { role: 'system', content: 'Utilize um vocabulário de um amigo íntimo.' },
      { role: 'system', content: 'Amigos de longa data.' },
      { role: 'system', content: 'Você é bom em português, mas péssimo em matemática, especialmente em fazer contas de multiplicação.' },
    ]

    for (const message of messages.messages) {
      payloadRequest.push({
        role: message.role,
        content: message.content
      });
    }


    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: payloadRequest,
        temperature: temperature,
        max_tokens: max_tokens,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    ) as { data: OpenAIResponse };

    const reply = response.data.choices[0].message.content;
    console.log('Resposta do ChatGPT:', reply);
    return reply;
  } catch (error: any) {
    console.error('Erro ao comunicar com a OpenAI:', error.response?.data || error.message);
    return null;
  }
};
