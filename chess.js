function canMove(element, source, destination, colour) {
    board_array = {
        "A8": 0, "B8": 8, "C8": 16, "D8": 24, "E8": 32, "F8": 40, "G8": 48, "H8": 56,
        "A7": 1, "B7": 9, "C7": 17, "D7": 25, "E7": 33, "F7": 41, "G7": 49, "H7": 57,
        "A6": 2, "B6": 10, "C6": 18, "D6": 26, "E6": 34, "F6": 42, "G6": 50, "H6": 58,
        "A5": 3, "B5": 11, "C5": 19, "D5": 27, "E5": 35, "F5": 43, "G5": 51, "H5": 59,
        "A4": 4, "B4": 12, "C4": 20, "D4": 28, "E4": 36, "F4": 44, "G4": 52, "H4": 60,
        "A3": 5, "B3": 13, "C3": 21, "D3": 29, "E3": 37, "F3": 45, "G3": 53, "H3": 61,
        "A2": 6, "B2": 14, "C2": 22, "D2": 30, "E2": 38, "F2": 46, "G2": 54, "H2": 62,
        "A1": 7, "B1": 15, "C1": 23, "D1": 31, "E1": 39, "F1": 47, "G1": 55, "H1": 63,
    }
    if (!element || !source || !destination) {
        throw new Error("Invalid inputs");
    } else {
        if (element == "Rook") {
            if ((Array.from(source)[0] == Array.from(destination)[0]) || (Array.from(source)[1] == Array.from(destination)[1])) {
                return true;
            } else {
                return false;
            }
        }

        else if (element == "Bishop") {
            const v1 = ((parseInt(Array.from(source)[0], 36) - 9) - (parseInt(Array.from(destination)[0], 36) - 9));
            const v2 = ((parseInt(Array.from(source)[1], 36) - 9) - (parseInt(Array.from(destination)[1], 36) - 9));
            if ((v1 == (v2 * -1)) || (v1 == (v2))) {
                return true;
            } else {
                return false;
            }
        }

        else if (element == "Queen") {
            const v1 = ((parseInt(Array.from(source)[0], 36) - 9) - (parseInt(Array.from(destination)[0], 36) - 9));
            const v2 = ((parseInt(Array.from(source)[1], 36) - 9) - (parseInt(Array.from(destination)[1], 36) - 9));
            const v3 = (Array.from(source)[0] == Array.from(destination)[0]) || (Array.from(source)[1] == Array.from(destination)[1])
            if ((v1 == (v2 * -1)) || (v1 == (v2)) || v3) {
                return true;
            } else {
                return false;
            }
        }

        else if (element == "King") {
            const v1 = ((parseInt(Array.from(source)[0], 36) - 9) - (parseInt(Array.from(destination)[0], 36) - 9));
            const v2 = ((parseInt(Array.from(source)[1], 36) - 9) - (parseInt(Array.from(destination)[1], 36) - 9));
            const v3 = (Array.from(source)[0] == Array.from(destination)[0]) || (Array.from(source)[1] == Array.from(destination)[1])
            const v4 = Math.abs(v1) + Math.abs(v2);
            if ((v1 == (-v2) || v1 == (v2) || v3) && (1 <= v4 <= 2) && Math.abs(v1) <= 1 && Math.abs(v2) <= 1) {
                return true;
            } else {
                return false;
            }
        }

        else if (element == "Knight") {
            const sx1 = (parseInt(Array.from(source)[0], 36) - 9);
            const sy1 = (parseInt(Array.from(source)[1]));
            const movesx1 = sx1 + 1;
            const movesy1 = sy1 + 2;
            const movesx2 = sx1 + 2;
            const movesy2 = sy1 + 1;
            const movesx3 = sx1 + 2;
            const movesy3 = sy1 - 1;
            const movesx4 = sx1 + 1;
            const movesy4 = sy1 - 2;
            const movesx5 = sx1 - 1;
            const movesy5 = sy1 - 2;
            const movesx6 = sx1 - 2;
            const movesy6 = sy1 - 1;
            const movesx7 = sx1 - 2;
            const movesy7 = sy1 + 1;
            const movesx8 = sx1 - 1;
            const movesy8 = sy1 + 2;

            const dx = (parseInt(Array.from(destination)[0], 36) - 9);
            const dy = (parseInt(Array.from(destination)[1]));

            if ((movesx1 === dx && movesy1 === dy) || (movesx2 === dx && movesy2 === dy) || (movesx3 === dx && movesy3 === dy) || (movesx4 === dx && movesy4 === dy) || (movesx5 === dx && movesy5 === dy) || (movesx6 === dx && movesy6 === dy) || (movesx7 === dx && movesy7 === dy) || (movesx8 === dx && movesy8 === dy)) {
                return true;
            } else {
                return false;
            }


        }
        else if (element == "Pawn") {
            const v1 = Array.from(source)[0] == Array.from(destination)[0];
            const v2 = (parseInt(Array.from(source)[1]));
            const v3 = (parseInt(Array.from(destination)[1]));
            if (v2 > 8 || v3 > 8) {
                throw new Error('Chess board is 8*8');
            } else {
                if (colour == 'white') {
                    if (v2 > 1) {
                        if ((v1 && (v3 - v2 == 1)) || ((v3 - v2 == 2) && v2 == 2)) {
                            return true
                        } else {
                            return false;
                        }
                    } else {
                        throw new Error('The white Pawn should start from the second row');
                    }
                } else if (colour == 'Black') {
                    if (v2 < 8) {
                        if ((v1 && (v2 - v3 == 1)) || ((v2 - v3 == 2) && v2 == 7)) {
                            return true
                        } else {
                            return false;
                        }
                    } else {
                        throw new Error('The black Pawn should start from the seventh row');
                    }
                }

            }


        }
    }
}


module.exports = canMove;

console.log(canMove("Rook", "A8", "H8"));
console.log(canMove("King", "D4", "E5"));
console.log(canMove("Bishop", "A7", "G1"));
console.log(canMove("Queen", "C4", "D6"));
console.log(canMove("Knight", "C4", "A3"));