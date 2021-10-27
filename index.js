const calculateRoverPosition = require("./roverOperations");
const { createPlateau, placeRover } = require("./visualise");

let input = [plateau, ...roverData] = [
    // Comment / uncomment below to try different inputs
    "5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"
];

const plateauUpperRightCoordinates = plateau.split(" ").map(e => parseInt(e));

input.shift(); // remove plateau coordinates
let previousPositions = [];

for (let i = 0; i < input.length; i += 2) {
    let coordinatesStart = [
        parseInt(roverData[i].split(" ")[0]),
        parseInt(roverData[i].split(" ")[1])
    ];
    let orientationStart = roverData[i].split(" ")[2];
    let movement = roverData[i + 1];

    let calculatedPosition = calculateRoverPosition(plateauUpperRightCoordinates,
        coordinatesStart, orientationStart, movement, previousPositions);

    previousPositions.push(calculatedPosition);
}

console.log(previousPositions);
