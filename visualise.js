const createPlateau = ([platX, platY]) => {
    if (!platX) throw new Error("x cannot be 0");
    else if (!platY) throw new Error("y cannot be 0");
    return [...Array(platY + 1)].map(e => Array(platX + 1).fill("_"));
}

const placeRover = (plateau, roverCoordinates, roverOrientation) => {
    const roverX = roverCoordinates[0];
    const roverY = roverCoordinates[1];
    const platY = plateau.length;
    plateau[platY - 1 - roverY][roverX] = roverOrientation;
    return plateau;
}

module.exports = { createPlateau, placeRover }
