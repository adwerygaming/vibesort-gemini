import { VibesortGemini } from "../index.js";

const vibesort = new VibesortGemini({ apiKey: "YOUR_GEMINI_API_KEY" })

// Sort numbers
const { data: sortedNumbers } = await vibesort.sort([90, 44, 67, 69, 12, 1, 64, 16, 32])
console.log(sortedNumbers)

// Sort string
const { data: sortedStrings } = await vibesort.sortString(["globe", "toy", "nodejs", "typescript", "javascript"])
console.log(sortedStrings)