const {
    calculateRoverPosition
} = require("./index");

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
    test("calculateRoverPosition - unrecognised movement command", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const roverCoordinatesStart = [0, 0];
        const roverOrientationStart = "S";
        const roverMovement = "RLRLRLP";
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Unrecognised movement command at index 6");
    })
    test("calculateRoverPosition - no movement", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const roverCoordinatesStart = [1, 0];
        const roverOrientationStart = "S";
        const roverMovement = "";
        const roverCoordinatesEnd = [1, 0];
        const roverOrientationEnd = "S";
        expect(calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement)).toStrictEqual([roverCoordinatesEnd,
                roverOrientationEnd]);
    })
})
