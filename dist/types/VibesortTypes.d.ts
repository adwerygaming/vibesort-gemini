type GoogleAIModels = "gemini-2.5-flash-lite" | "gemini-2.5-flash" | "gemini-2.5-pro";
type SortModes = "ascending" | "decending";
interface VibesortGeminiConstructor {
    model?: GoogleAIModels;
    apiKey: string;
}
interface VibesortGeminiResponse<T> {
    data?: T | null;
    error?: any;
}

export type { GoogleAIModels, SortModes, VibesortGeminiConstructor, VibesortGeminiResponse };
