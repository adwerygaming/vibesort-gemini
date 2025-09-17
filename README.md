<div align="center">
    <h1>Vibesort Gemini</h1>
    <p><b>Vibesort-gemini</b> is a lightweight TypeScript library that uses Google's Gemini AI to sort arrays of numbers or strings.</p>
</div>

## Features

*   Sorts arrays of numbers in ascending or descending order.
*   Sorts arrays of strings in ascending or descending order.
*   Powered by Google's Gemini large language models.
*   Simple, promise-based API.

## How to use
#### Install the package
```sh
npm install vibesort-gemini
```

#### Import the package
```ts
import { VibesortGemini } from "vibesort-gemini"
const vibesort = new VibesortGemini({ apiKey: "YOUR_GEMINI_API_KEY" })
```

#### Sort Numbers
```ts
const { data: sortedNumbers } = await vibesort.sort([90, 44, 67, 69, 12, 1, 64, 16, 32])
console.log(sortedNumbers)
```

#### Sort Strings
```ts
const { data: sortedStrings } = await vibesort.sortString(["globe", "toy", "nodejs", "typescript", "javascript"])
console.log(sortedStrings)
```

## Contributing
uhh, just clone and edit. push to main. i guess that how contributing works here in github. ¯\\\_(ツ)_/¯

## License

This project is licensed under the <b>ISC License.</b>
