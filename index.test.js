const { calculateRoverPosition, createPlateau } = require("./index");

describe("Combined testing suite", () => {
    test("createPlateau Test", () => {
        const plateauUpperRightCoordinates = [6, 5];
        const plateau = [
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
        ]
        expect(createPlateau(plateauUpperRightCoordinates)).toEqual(plateau);
    })
})
