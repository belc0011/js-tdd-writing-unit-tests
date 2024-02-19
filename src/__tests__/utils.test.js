import { pointsForWord } from "../utils.js";

describe("pointsForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per consontant", () => {
        const word = "tEsT";

        const points = pointsForWord(word);

        expect(points).toBe(7)
    })
})
