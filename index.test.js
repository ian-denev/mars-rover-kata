const {
    calculateRoverPosition
} = require("./index");

describe("calculateRoverPosition testing suite", () => {
    // Dummy Objects
    plateauTaskSheet = {
        upperRightCoordinates: [5, 5]
    }
    roverOneTaskSheet = {
        coordinatesStart: [1, 2],
        orientationStart: "N",
        movement: "LMLMLMLMM",
        coordinatesEnd: [1, 3],
        orientationEnd: "N"
    };
    roverTwoTaskSheet = {
        coordinatesStart: [3, 3],
        orientationStart: "E",
        movement: "MMRMMRMRRM",
        coordinatesEnd: [5, 1],
        orientationEnd: "E"
    };

    test.each([roverOneTaskSheet, roverTwoTaskSheet])
        ("task sheet rover test #$#", ({ coordinatesStart, orientationStart, movement, coordinatesEnd, orientationEnd }) => {
            expect(calculateRoverPosition(
                plateauTaskSheet.upperRightCoordinates,
                coordinatesStart,
                orientationStart,
                movement))
                .toStrictEqual([coordinatesEnd, orientationEnd]);
        });

    test("task sheet rover 1 and 2 - no collision", () => {
        // assume that rover 1 finishes before rover 2 starts
        const previousRoverPositions = [roverOneTaskSheet.coordinatesEnd];
        expect(calculateRoverPosition(
            plateauTaskSheet.upperRightCoordinates,
            roverTwoTaskSheet.coordinatesStart,
            roverTwoTaskSheet.orientationStart,
            roverTwoTaskSheet.movement,
            previousRoverPositions)).toStrictEqual([roverTwoTaskSheet.coordinatesEnd,
            roverTwoTaskSheet.orientationEnd]);
    })
    test("collision when placing rover 2", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement, previousRoverPositions] = [
            [5, 5], [3, 3], "E", "MMRMMRMRRM", [[[3, 3], "N"]]
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement,
            previousRoverPositions))
            .toThrow("Another rover is already at this position");
    })
    test("collision when placing rover 5", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement, previousRoverPositions] = [
            [5, 5], [2, 2], "E", "MMRMMRMRRM", [[[1, 1], "N"], [[0, 0], "W"], [[2, 2], "N"], [[3, 3], "N"]]
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement,
            previousRoverPositions))
            .toThrow("Another rover is already at this position");
    })
    test("collision into another rover when moving", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement, previousRoverPositions] = [
            [5, 5], [0, 3], "E", "MMLRRLMMMMMMM", [[[3, 3], "N"]]
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement,
            previousRoverPositions))
            .toThrow("Movement obstructed by another rover");
    })
    test("initial placement out of bounds on X", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart] = [
            [5, 5], [6, 3]
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart))
            .toThrow("Initial placement on X axis not allowed");
    })
    test("initial placement out of bounds on Y", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart] = [
            [5, 5], [3, -1]
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart))
            .toThrow("Initial placement on Y axis not allowed");
    })
    test("out of bounds (negative) on X", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement] = [
            [1, 1], [0, 0], "W", "MMMMMMM"
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on X axis at index 0 not allowed");
    })
    test("out of bounds on Y", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement] = [
            [1, 1], [0, 0], "N", "LLLLMMMMMMM"
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on Y axis at index 5 not allowed");
    })
    test("out of bounds (negative) on Y", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement] = [
            [1, 1], [0, 0], "S", "M"
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Movement on Y axis at index 0 not allowed");
    })
    test("unrecognised movement command", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement] = [
            [1, 1], [0, 0], "S", "RLRLRLP"
        ];
        expect(() => calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement))
            .toThrow("Unrecognised movement command at index 6");
    })
    test("no movement", () => {
        const [plateauUpperRightCoordinates, roverCoordinatesStart, roverOrientationStart, roverMovement, roverCoordinatesEnd, roverOrientationEnd] = [
            [1, 1], [1, 0], "S", "", [1, 0], "S"
        ];
        expect(calculateRoverPosition(
            plateauUpperRightCoordinates,
            roverCoordinatesStart,
            roverOrientationStart,
            roverMovement)).toStrictEqual([roverCoordinatesEnd,
                roverOrientationEnd]);
    })
})
