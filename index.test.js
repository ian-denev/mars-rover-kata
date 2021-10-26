const { calculateRoverPosition, createPlateau } = require("./index");

describe("Combined testing suite", () => {
    test("createPlateau Test", () => {
        const plateauSize = [6, 5];
        const plateau = [
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
        ]
        expect(createPlateau(plateauSize)).toEqual(plateau);
    })
})
