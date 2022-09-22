const canMove = require('./chess');

// Invalid inputs
test('should throw an error if chess called without 3 arg', () => {
    expect(canMove).toThrow('Invalid inputs');
});

test('should throw an error if called without any of the 3 arg', () => {
    expect(() => canMove("Queen", "D3")).toThrow('Invalid inputs');
});

// Pawn tests
test('Should get an error if pown start from the first row', () => {
    expect(() => canMove("Pawn", "D1", "D2")).toThrow('The Pawn should start from the second row');
});
test('Tests for Pawn', () => {
    expect(canMove("Pawn", "D2", "D3")).toBe(true);
});
test('Tests 2 steps are fine from the second row only', () => {
    expect(canMove("Pawn", "D2", "D4")).toBe(true);
});
test('should return error when try to exceed chess board 8*8 limits', () => {
    expect(() => canMove("Pawn", "D8", "D9")).toThrow('Chess board is 8*8');
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
