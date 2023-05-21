import hateMessages from './HateMessages.js';
import { ChatMessageRole } from './ChatMessageRole.js';
import { directInterventionContext } from './InterventionContexts.js'
import { Configuration, OpenAIApi, CreateChatCompletionRequest, ChatCompletionRequestMessage } from "openai";
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
});

const openai = new OpenAIApi(configuration);

console.log('DIRECT intervention');
const request: CreateChatCompletionRequest = {
    model: 'gpt-3.5-turbo',
    messages: null
}

for (const hateMessage of hateMessages) {
    request.messages = [
        directInterventionContext,
        {
            role: ChatMessageRole.USER,
            content: hateMessage
        }
    ]

    const chatGPT = await openai.createChatCompletion(request);

    const result = chatGPT.data.choices[0].message.content;

    console.log();
    console.log('hatemessage: ' + hateMessage);
    console.log('|');
    console.log('reply: ' + result);
    console.log();
}