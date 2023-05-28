import { ChatCompletionRequestMessage } from "openai";
import { ChatMessageRole } from './ChatMessageRole';

const universalInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: 'Reageer objectief in de taal van het ontvangen haatbericht.'
}

const directInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Reageer krachtig en duidelijk met max 25 woorden tegen volgend haatbericht."
}

const distractInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Schrijf een bericht van max 40 woorden om een situatie indirect op te lossen door in te breken in volgende conversatie."
}

const counterInterventionContext : ChatCompletionRequestMessage = {
    role: ChatMessageRole.SYSTEM,
    content: "Schrijf een tegenspraak bericht van max 35 woorden als antwoord op volgende uitspraak."
}

export { universalInterventionContext, directInterventionContext, distractInterventionContext, counterInterventionContext };