const createPlateau = ([platX, platY]) => {
    if (!platX) throw new Error("x cannot be 0");
    else if (!platY) throw new Error("y cannot be 0");
    return [...Array(platY)].map(e => Array(platX));
}

const placeRover = (plateau, roverCoordinates, roverOrientation) => {
    const roverX = roverCoordinates[0];
    const roverY = roverCoordinates[1];
    const platY = plateau.length;

    plateau[platY - 1 - roverY][roverX] = roverOrientation;

    return plateau;
}

const calculateRoverPosition = (plateauUpperRightCoordinates, [roverX, roverY], roverOri, roverMovement) => {
    [...roverMovement].forEach(letter => {
        switch (letter) {
            case "L": roverOri == "N" ? roverOri = "W" : roverOri == "W" ? roverOri = "S" :
                roverOri == "S" ? roverOri = "E" : roverOri == "E" ? roverOri = "N" : ""; break;
            case "R": roverOri == "N" ? roverOri = "E" : roverOri == "E" ? roverOri = "S" :
                roverOri == "S" ? roverOri = "W" : roverOri == "W" ? roverOri = "N" : ""; break;
            case "M":
                switch (roverOri) {
                    case "N": roverY++; break;
                    case "E": roverX++; break;
                    case "S": roverY--; break;
                    case "W": roverX--; break;
                }
                break;
        }
    })
    return [[roverX, roverY], roverOri];
}

module.exports = { calculateRoverPosition, createPlateau, placeRover }
