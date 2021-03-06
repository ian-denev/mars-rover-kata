const {
    createPlateau,
    placeRover
} = require("./visualise");

describe("createPlateau testing suite", () => {
    test("createPlateau 6x5 Test", () => {
        const plateauUpperRightCoordinates = [6, 5];
        const plateau = [
            ["_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "_", "_", "_", "_"]
        ]
        expect(createPlateau(plateauUpperRightCoordinates)).toEqual(plateau);
    })
    test("createPlateau 2x7 Test", () => {
        const plateauUpperRightCoordinates = [2, 7];
        const plateau = [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"]
        ]
        expect(createPlateau(plateauUpperRightCoordinates)).toEqual(plateau);
    })
    test("createPlateau 1x1 Test", () => {
        const plateauUpperRightCoordinates = [1, 1];
        const plateau = [
            ["_", "_"],
            ["_", "_"]
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

describe("placeRover testing suite", () => {
    test("placeRover Initial Placement", () => {
        let plateau = createPlateau([5, 5]);
        const roverCoordinates = [5, 1];
        const roverOrientation = "N";
        const act = placeRover(plateau, roverCoordinates, roverOrientation);
        expect(act[4][5]).toEqual(roverOrientation);
    })
    test("placeRover Initial Placement", () => {
        let plateau = createPlateau([8, 8]);
        const roverCoordinates = [4, 4];
        const roverOrientation = "E";
        const act = placeRover(plateau, roverCoordinates, roverOrientation);
        expect(act[4][4]).toEqual(roverOrientation);
    })
})