export enum ChatMessageRole {
    SYSTEM = 'system', // context before prompt, generates no answer
    USER = 'user', // user prompt
    ASSISTENT = 'assistent' // reply from gpt
}