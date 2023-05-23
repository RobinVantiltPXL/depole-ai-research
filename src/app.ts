import { ChatMessageRole } from './ChatMessageRole';
import { directInterventionContext, distractInterventionContext, counterInterventionContext } from './InterventionContexts';
import { Configuration, OpenAIApi, CreateChatCompletionRequest, ChatCompletionRequestMessage } from "openai";
import prompt from "prompt-sync";
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
});

const openai = new OpenAIApi(configuration);

const hateMessage = prompt({sigint: true})("Enter hate message: ");

getReply('DIRECT', directInterventionContext);
getReply('DISTRACT', distractInterventionContext);
getReply('COUNTER', counterInterventionContext);

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

    const start = performance.now()
    const chatGPT = await openai.createChatCompletion(request);

    console.log(`\n${contextName} intervention: \t\t${performance.now() - start}ms`);

    const result = chatGPT.data.choices[0].message.content;
    
    console.log(result);
}