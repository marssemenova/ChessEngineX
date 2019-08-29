/*
    loop (pieces[])
        if (piece on square == side to move (white or black))
            then generateMoves() for square

    squareOfPiece = pieceListArray[index] // for a given piece, what square is it on?

    index?

    wP * 10 + wPNum -> 0 based index of num of pieces(GameBoard.pceNum)
    wN * 10 + wNnum

    say we have 4 white pawns GameBoard.pceNum[wP] = 4

    for(pceNum = 0; pceNum < GameBoard.pceNum[wP]; ++pceNum) {
        sq = PlistArray[wP * 10 + pceNum]
    }

    sq1 = PlistArray[wP * 10 + 0]
    sq2 = PlistArray[wP * 10 + 1]
    sq3 = PlistArray[wP * 10 + 2]
    sq4 = PlistArray[wP * 10 + 3]

    wP 10 - 19, wN 20 - 29
 */
function PCEINDEX(pce, pceNum) {
    retun (pce * 10 + pceNUm)
}

// global game board variable
var GameBoard = {};

// properties of the game board
GameBoard.pieces = new Array (BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;
GameBoard.fiftyMove = 0; // a player can claim draw if a capture hasn't been made or a pawn hasn't been moved in 50 moves by both players
GameBoard.hisPly = 0; // maintain count of all the half moves (1 move for each side)
GameBoard.ply = 0; // number of half moves made in the search tree
GameBoard.castlePerm = 0; // for casting (both queen and queen side), can only do it if pieces haven't moved, using bitwise to determine whether or not allowed
GameBoard.material = new Array(2);
GameBoard.pceNum = new Array(13); // how many of each type  of piece is there
GameBoard.pList = new Array(14 * 10);