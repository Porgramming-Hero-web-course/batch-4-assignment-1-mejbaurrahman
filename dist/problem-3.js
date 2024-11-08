"use strict";
{
    const countWordOccurrences = (str, word) => {
        let count = 0;
        const strLowerCase = str.toLowerCase();
        const wordLowerCase = word.toLowerCase();
        let convertedStr = "";
        for (const char of strLowerCase) {
            if ((char >= "A" && char <= "Z") ||
                (char >= "a" && char <= "z") ||
                char === " ") {
                convertedStr += char;
            }
        }
        const words = convertedStr.split(" ");
        for (const word of words) {
            if (word === wordLowerCase) {
                count++;
            }
        }
        return count;
    };
    // const result = countWordOccurrences(
    //   "TypeScript is great. I love TypeScript!",
    //   "typescript"
    // );
    // console.log(result);
}
