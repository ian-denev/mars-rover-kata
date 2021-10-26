const { calculateRoverPosition, createPlateau } = require("./index");

describe("createPlateau testing suite", () => {
    test("createPlateau 6x5 Test", () => {
        const plateauUpperRightCoordinates = [6, 5];
        const plateau = [
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined]
        ]
        expect(createPlateau(plateauUpperRightCoordinates)).toEqual(plateau);
    })
    test("createPlateau 2x7 Test", () => {
        const plateauUpperRightCoordinates = [2, 7];
        const plateau = [
            [undefined, undefined],
            [undefined, undefined],
            [undefined, undefined],
            [undefined, undefined],
            [undefined, undefined],
            [undefined, undefined],
            [undefined, undefined]
        ]
        expect(createPlateau(plateauUpperRightCoordinates)).toEqual(plateau);
    })
    test("createPlateau 1x1 Test", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const plateau = [
            [undefined]
        ]
        expect(createPlateau(plateauUpperRightCoordinates)).toEqual(plateau);
    })
    test("createPlateau 0x1 Test", () => {
        const plateauUpperRightCoordinates = [0, 1];
        expect(() => createPlateau(plateauUpperRightCoordinates)).toThrow("x cannot be 0");
    })
    test("createPlateau 1x0 Test", () => {
        const plateauUpperRightCoordinates = [1, 0];
        expect(() => createPlateau(plateauUpperRightCoordinates)).toThrow("y cannot be 0");
    })
})
