# Chess-Move-Challenge
The task this week is to create a function which takes the name of a chess piece, its position on a board and an intended destination. The function should return true if the piece can move to the destination, or false if it can't. You can assume that the piece is the only piece on the board and that it is a White piece.

#  Rewards:
:four:  Points are awarded for a working algorithm capable of validating these sample moves. <br />
:three:  Further points are awarded for illustrating the movement with a simple user interface. <br />
:two:  Further points are awarded for providing at least one unit test. <br />
:one:  Further point is awarded for providing support for the Black pieces (your function should accept an additional 'colour' parameter). <br />

# Notes:
:point_right:  A standard chess board is arranged with the White pieces occupying rows 1 & 2, Black pieces occupying rows 8 & 7, like this <br />
:point_right:  Here's a handy guide to how each piece can move in a standard game of chess. <br />
:point_right:  Don't forget that a pawn can move 2 squares when starting from its initial row. <br />

# Example:
canMove("Rook", "A8", "D8") would return true,  <br />
canMove("Queen", "C4", "D6") would return false.


# Instructions
To test the function for the above examples run 
```
node chess
```

Tests ar written in jest, to the tests:
```
npm run test
```
