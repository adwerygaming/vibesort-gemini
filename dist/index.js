import { GoogleGenAI } from "@google/genai";
class VibesortGemini {
  constructor({ apiKey, model }) {
    this.client = new GoogleGenAI({ apiKey });
    this.model = model != null ? model : "gemini-2.5-flash";
  }
  async cleanOutput(input) {
    const cleanedJson = input.replace("```json", "").replace("```", "");
    const parsedJson = JSON.parse(cleanedJson);
    return parsedJson;
  }
  async sort(input, sortMode = "ascending") {
    const promt = `You are a sorting function.
Sort the following array of numbers in ${sortMode} order.
Return only a valid JSON array. Do not include any text, explanation, or formatting outside the array.

Input: ${input}`;
    try {
      const ai = await this.client.models.generateContent({ model: this.model, contents: promt });
      const rawContent = ai.text;
      if (!rawContent) {
        return { data: null, error: "no_response" };
      }
      const parsedJson = await this.cleanOutput(rawContent);
      let output = [];
      if (Array.isArray(parsedJson) && parsedJson.every((n) => typeof n === "number")) {
        output = parsedJson;
      } else {
        return { data: null, error: "not_a_number_response" };
      }
      return { data: output, error: null };
    } catch (e) {
      return { data: null, error: e };
    }
  }
  async sortString(input, sortMode = "ascending") {
    const promt = `You are a sorting function.
Sort the following array of strings in ${sortMode} order.
Return only a valid JSON array. Do not include any text, explanation, or formatting outside the array.

Input: ${input}`;
    try {
      const ai = await this.client.models.generateContent({ model: this.model, contents: promt });
      const rawContent = ai.text;
      if (!rawContent) {
        return { data: null, error: "no_response" };
      }
      const parsedJson = await this.cleanOutput(rawContent);
      let output = [];
      if (Array.isArray(parsedJson) && parsedJson.every((n) => typeof n === "string")) {
        output = parsedJson;
      } else {
        return { data: null, error: "not_a_string_response" };
      }
      return { data: output, error: null };
    } catch (e) {
      return { data: null, error: e };
    }
  }
}
export {
  VibesortGemini
};
//# sourceMappingURL=index.js.map