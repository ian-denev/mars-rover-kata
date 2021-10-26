const createPlateau = ([platX, platY]) => {
    if (!platX) throw new Error("x cannot be 0");
    else if (!platY) throw new Error("y cannot be 0");
    return [...Array(platY)].map(e => Array(platX));
}

const calculateRoverPosition = (upperRightCoordinates, ...roverData) => {
}

module.exports = { calculateRoverPosition, createPlateau }
