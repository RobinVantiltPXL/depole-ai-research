import { ChatMessageRole } from './ChatMessageRole';
import { universalInterventionContext, directInterventionContext, distractInterventionContext, counterInterventionContext } from './InterventionContexts';
import { Configuration, OpenAIApi, CreateChatCompletionRequest, ChatCompletionRequestMessage } from "openai";
import prompt from "prompt-sync";
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
});

const openai = new OpenAIApi(configuration);

const hateMessage: string = prompt({sigint: true})("Enter hate message: ");

getReply('DIRECT', directInterventionContext);
getReply('DISTRACT', distractInterventionContext);
getReply('COUNTER', counterInterventionContext);

async function getReply(contextName: string, context: ChatCompletionRequestMessage) {
    const request: CreateChatCompletionRequest = {
        model: 'gpt-3.5-turbo',
        messages: [
            context, // direct/counter/distract context
            universalInterventionContext,
            {
                role: ChatMessageRole.USER,
                content: hateMessage
            }
        ]
    }

    const startTime = performance.now();
    const chatCompletion = await openai.createChatCompletion(request);
    const endTime = performance.now();

    const time = Math.round(endTime - startTime);
    console.log(`\n${contextName} intervention: \t\t${time}ms`);

    const result = chatCompletion.data.choices[0].message.content;
    console.log(result);
}