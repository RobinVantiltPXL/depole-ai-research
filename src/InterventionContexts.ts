import { ChatCompletionRequestMessage } from "openai";
import { ChatMessageRole } from './ChatMessageRole';

// idk about ik-vorm, beter objectief miss?
// bijv direct -> Als een zwarte persoon kan ik je vertellen dat...
const universalContext = 'Reageer in de taal van het ontvangen haatbericht en doe dit vanuit de ik-vorm.'

/*
Direct
Als iedereen fysiek veilig is, spreek dan krachtig en duidelijk tegen de pesterijen/discriminatie die plaatsvinden (geef voorrang aan het helpen van het doelwit boven het debatteren over de pester).
 */
const directInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Reageer krachtig en duidelijk met max 25 woorden tegen volgend haatbericht. " + universalContext
}

/*
Distract
Breng de situatie indirect in beweging door de pester en het doelwit te onderbreken (bijv. commotie, praatje, enz.).
*/

const distractInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Schrijf een bericht van max 40 woorden om een situatie indirect op te lossen door in te breken in volgende conversatie. " + universalContext
}

/*
counter
*/

const counterInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Schrijf een tegenspraak bericht van max 35 woorden als antwoord op volgende uitspraak. " + universalContext
}

export { directInterventionContext, distractInterventionContext, counterInterventionContext };