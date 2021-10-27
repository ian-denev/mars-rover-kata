const {
    calculateRoverPosition,
    createPlateau,
    placeRover
} = require("./index");

xdescribe("createPlateau testing suite", () => {
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

xdescribe("placeRover testing suite", () => {
    test("placeRover Initial Placement", () => {
        const plateau = createPlateau([6, 5]);
        const roverCoordinates = [5, 1];
        const roverOrientation = "N";
        const act = placeRover(plateau, roverCoordinates, roverOrientation);
        expect(act[3][5]).toEqual(roverOrientation);
    })
    test("placeRover Initial Placement", () => {
        const plateau = createPlateau([8, 8]);
        const roverCoordinates = [4, 4];
        const roverOrientation = "E";
        const act = placeRover(plateau, roverCoordinates, roverOrientation);
        expect(act[3][4]).toEqual(roverOrientation);
    })
})

describe("calculateRoverPosition testing suite", () => {
    test("calculateRoverPosition Task Sheet Rover 1", () => {
        const plateauUpperRightCoordinates = [5, 5];
        const roverCoordinatesStart = [1, 2];
        const roverOrientationStart = "N";
        const roverMovement = "LMLMLMLMM";
        const roverCoordinatesEnd = [1, 3];
        const roverOrientationEnd = "N";
        expect(calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toStrictEqual([roverCoordinatesEnd,
                roverOrientationEnd]);
    })
    test("calculateRoverPosition Task Sheet Rover 2", () => {
        const plateauUpperRightCoordinates = [5, 5];
        const roverCoordinatesStart = [3, 3];
        const roverOrientationStart = "E";
        const roverMovement = "MMRMMRMRRM";
        const roverCoordinatesEnd = [5, 1];
        const roverOrientationEnd = "E";
        expect(calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toStrictEqual([roverCoordinatesEnd,
                roverOrientationEnd]);
    })
    test("calculateRoverPosition - out of bounds on X", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const roverCoordinatesStart = [0, 0];
        const roverOrientationStart = "E";
        const roverMovement = "MMMMMMM";
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on X axis at index 1 not allowed");
    })
    test("calculateRoverPosition - out of bounds (negative) on X", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const roverCoordinatesStart = [0, 0];
        const roverOrientationStart = "W";
        const roverMovement = "MMMMMMM";
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on X axis at index 0 not allowed");
    })
    test("calculateRoverPosition - out of bounds on Y", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const roverCoordinatesStart = [0, 0];
        const roverOrientationStart = "N";
        const roverMovement = "LLLLMMMMMMM";
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on Y axis at index 5 not allowed");
    })
    test("calculateRoverPosition - out of bounds (negative) on Y", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const roverCoordinatesStart = [0, 0];
        const roverOrientationStart = "S";
        const roverMovement = "M";
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on Y axis at index 0 not allowed");
    })
})
