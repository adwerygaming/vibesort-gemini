import { VibesortGeminiConstructor, SortModes, VibesortGeminiResponse } from './types/VibesortTypes.js';

declare class VibesortGemini {
    private model;
    private client;
    constructor({ apiKey, model }: VibesortGeminiConstructor);
    private cleanOutput;
    sort(input: number[], sortMode?: SortModes): Promise<VibesortGeminiResponse<number[]>>;
    sortString(input: string[], sortMode?: SortModes): Promise<VibesortGeminiResponse<string[]>>;
}

export { VibesortGemini };
