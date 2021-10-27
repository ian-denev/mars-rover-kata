const calculateRoverPosition = (platCoord, [roverX, roverY], roverOri, roverMovement, previousRoverPositions) => {
    // Initial out-of-bounds and obstruction checks
    previousRoverPositions?.forEach(prevPos => {
        if (roverX == prevPos[0][0] && roverY == prevPos[0][1]) throw new Error("Another rover is already at this position");
    })
    if (roverX < 0 || roverX > platCoord[0]) throw new Error("Initial placement on X axis not allowed");
    else if (roverY < 0 || roverY > platCoord[1]) throw new Error("Initial placement on Y axis not allowed");

    [...roverMovement].forEach((letter, index) => {
        switch (letter) {
            // Rotate 90 degrees
            case "L": roverOri == "N" ? roverOri = "W" : roverOri == "W" ? roverOri = "S" :
                roverOri == "S" ? roverOri = "E" : roverOri == "E" ? roverOri = "N" : ""; break;
            case "R": roverOri == "N" ? roverOri = "E" : roverOri == "E" ? roverOri = "S" :
                roverOri == "S" ? roverOri = "W" : roverOri == "W" ? roverOri = "N" : ""; break;

            // Movement
            case "M":
                switch (roverOri) {
                    case "N": roverY++; break;
                    case "E": roverX++; break;
                    case "S": roverY--; break;
                    case "W": roverX--; break;
                }

                // Out-of-bounds and obstruction checks for every movement
                if (roverX < 0 || roverX > platCoord[0]) throw new Error(`Movement on X axis at index ${index} not allowed`);
                else if (roverY < 0 || roverY > platCoord[1]) throw new Error(`Movement on Y axis at index ${index} not allowed`);
                previousRoverPositions?.forEach(prevPos => {
                    if (roverX == prevPos[0][0] && roverY == prevPos[0][1]) throw new Error("Movement obstructed by another rover");
                })
                break;
            default:
                throw new Error(`Unrecognised movement command at index ${index}`);
        }
    })
    return [[roverX, roverY], roverOri];
}

module.exports = calculateRoverPosition;
