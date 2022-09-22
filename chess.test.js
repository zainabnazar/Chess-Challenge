const canMove = require('./chess');

// Invalid inputs
test('should throw an error if chess called without 3 arg', () => {
    expect(canMove).toThrow('Invalid inputs');
});

test('should throw an error if called without any of the 3 arg', () => {
    expect(() => canMove("Queen", "D3")).toThrow('Invalid inputs');
});

// white Pawn tests
test('Should get an error if pown start from the first row', () => {
    expect(() => canMove("Pawn", "D1", "D2", "white")).toThrow('The white Pawn should start from the second row');
});
test('Tests for Pawn', () => {
    expect(canMove("Pawn", "D2", "D3", "white")).toBe(true);
});
test('Tests 2 steps are fine from the second row only', () => {
    expect(canMove("Pawn", "D2", "D4", "white")).toBe(true);
});
test('should return error when try to exceed chess board 8*8 limits', () => {
    expect(() => canMove("Pawn", "D8", "D9", "white")).toThrow('Chess board is 8*8');
});
test('should return false for horizontal move', () => {
    expect(canMove("Pawn", "D8", "E8", "white")).toBe(false);
});
// Black Pawn tests
test('Should get an error if black pown start from the eighth row', () => {
    expect(() => canMove("Pawn", "D8", "D7", "Black")).toThrow('The black Pawn should start from the seventh row');
});
test('Tests for Pawn', () => {
    expect(canMove("Pawn", "D2", "D3", "Black")).toBe(false);
});
test('Tests 2 steps are fine from the second row only', () => {
    expect(canMove("Pawn", "B7", "B6", "Black")).toBe(true);
});
test('Tests 2 steps are fine from the second row only', () => {
    expect(canMove("Pawn", "B7", "B5", "Black")).toBe(true);
});


// Rook tests
test('Tests for Rook', () => {
    expect(canMove("Rook", "A8", "H8")).toBe(true);
});
test('Tests for Rook', () => {
    expect(canMove("Rook", "A8", "C6")).toBe(false);
});

// Bishop tests
test('Tests for Bishop', () => {
    expect(canMove("Bishop", "A7", "G1")).toBe(true);
});
test('Tests for Bishop', () => {
    expect(canMove("Bishop", "A7", "C6")).toBe(false);
});

// Queen tests
test('Tests for Queen', () => {
    expect(canMove("Queen", "C4", "D6")).toBe(false);
});
test('Tests for Queen', () => {
    expect(canMove("Queen", "C4", "F1")).toBe(true);
});

// King tests
test('Tests for King', () => {
    expect(canMove("King", "D4", "E5")).toBe(true);
});
test('Tests for King', () => {
    expect(canMove("King", "D4", "D6")).toBe(false);
});

// Knight tests
test('Tests for Knight', () => {
    expect(canMove("Knight", "C4", "A3")).toBe(true);
});
test('Tests for Knight', () => {
    expect(canMove("Knight", "C4", "C8")).toBe(false);
});
