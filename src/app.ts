import { ChatMessageRole } from './ChatMessageRole';
import { directInterventionContext } from './InterventionContexts';
import { Configuration, OpenAIApi, CreateChatCompletionRequest, ChatCompletionRequestMessage } from "openai";
import prompt from "prompt-sync";
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
});

const openai = new OpenAIApi(configuration);

const hateMessage = prompt({sigint: true})("Enter hate message: ");

getReply('DIRECT', directInterventionContext)
// getReply('DELAY', ...)

async function getReply(contextName: String, context: ChatCompletionRequestMessage) {
    const request: CreateChatCompletionRequest = {
        model: 'gpt-3.5-turbo',
        messages: [
            context,
            {
                role: ChatMessageRole.USER,
                content: hateMessage
            }
        ]
    }

    const chatGPT = await openai.createChatCompletion(request);

    const result = chatGPT.data.choices[0].message.content;
    
    console.log(`\n${contextName} intervention: \n${result}`);
}