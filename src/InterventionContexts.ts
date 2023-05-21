import { ChatCompletionRequestMessage } from "openai";
import { ChatMessageRole } from './ChatMessageRole.js';

/*
Direct
Als iedereen fysiek veilig is, spreek dan krachtig en duidelijk tegen de pesterijen/discriminatie die plaatsvinden (geef voorrang aan het helpen van het doelwit boven het debatteren over de pester).
 */
const directInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Respond objectively to the next hate messages in a direct way"
}

export { directInterventionContext };