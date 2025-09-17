import { GoogleGenAI } from "@google/genai";
import { GoogleAIModels, SortModes, VibesortGeminiConstructor, VibesortGeminiResponse } from "./types/VibesortTypes.js";

export class VibesortGemini {
    private model: GoogleAIModels;
    private client: GoogleGenAI;

    constructor({ apiKey, model }: VibesortGeminiConstructor) {
        this.client = new GoogleGenAI({ apiKey });
        this.model = model ?? "gemini-2.5-flash"
    }

    private async cleanOutput(input: string) {
        const cleanedJson = input.replace("\`\`\`json", "").replace("\`\`\`", "")
        const parsedJson = JSON.parse(cleanedJson)

        return parsedJson
    }

    async sort(input: number[], sortMode: SortModes = "ascending"): Promise<VibesortGeminiResponse<number[]>> {
        const promt: string = `You are a sorting function.\nSort the following array of numbers in ${sortMode} order.\nReturn only a valid JSON array. Do not include any text, explanation, or formatting outside the array.\n\nInput: ${input}`

        try {
            const ai = await this.client.models.generateContent({ model: this.model, contents: promt });
    
            const rawContent = ai.text
    
            if (!rawContent) {
                return { data: null, error: "no_response" }
            }

            const parsedJson = await this.cleanOutput(rawContent)
            let output: number[] = []
            
            if (Array.isArray(parsedJson) && parsedJson.every(n => typeof n === "number")) {
                output = parsedJson
            } else {
                return { data: null, error: "not_a_number_response"}
            }

            return { data: output, error: null }
        } catch (e) {
            return { data: null, error: e }
        }
    }

    async sortString(input: string[], sortMode: SortModes = "ascending"): Promise<VibesortGeminiResponse<string[]>> {
        const promt: string = `You are a sorting function.\nSort the following array of strings in ${sortMode} order.\nReturn only a valid JSON array. Do not include any text, explanation, or formatting outside the array.\n\nInput: ${input}`

        try {
            const ai = await this.client.models.generateContent({ model: this.model, contents: promt });

            const rawContent = ai.text

            if (!rawContent) {
                return { data: null, error: "no_response" }
            }

            const parsedJson = await this.cleanOutput(rawContent)
            let output: string[] = []

            if (Array.isArray(parsedJson) && parsedJson.every(n => typeof n === "string")) {
                output = parsedJson
            } else {
                return { data: null, error: "not_a_string_response" }
            }

            return { data: output, error: null }
        } catch (e) {
            return { data: null, error: e }
        } 
    }
}