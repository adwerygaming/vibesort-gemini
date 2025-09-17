export type GoogleAIModels = "gemini-2.5-flash-lite" | "gemini-2.5-flash" | "gemini-2.5-pro"
export type SortModes = "ascending" | "decending" 

export interface VibesortGeminiConstructor {
    model?: GoogleAIModels,
    apiKey: string
}

export interface VibesortGeminiResponse<T> {
    data?: T | null,
    error?: any
}
