import { ChatCompletionRequestMessage } from "openai";
import { ChatMessageRole } from './ChatMessageRole';

/*
Direct
Als iedereen fysiek veilig is, spreek dan krachtig en duidelijk tegen de pesterijen/discriminatie die plaatsvinden (geef voorrang aan het helpen van het doelwit boven het debatteren over de pester).
 */
const directInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Respond objectively to the next hate messages in a direct way, and do it in the language of the received hate message"
}

/*
Delay
Ga in gesprek met de persoon die werd gediscrimineerd/gepest (bv. ondersteuning, hulp aanbieden, enz.).
*/

// todo

/*
Distract
Breng de situatie indirect in beweging door de pester en het doelwit te onderbreken (bijv. commotie, praatje, enz.).
*/

// todo

export { directInterventionContext };