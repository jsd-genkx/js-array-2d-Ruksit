"use strict";
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let x = 0;
let y = 0; // Start at A (0,0) -> [row][col]

const moves = [];
moves.push(board[x][y]); // A
console.log(`location A : x = ${x},y = ${y}`);

// Move Right to B
y++;
moves.push(board[x][y]); // B
console.log(`location B : x = ${x},y = ${y}`);

// Move Right to C
y++;
moves.push(board[x][y]); // C
console.log(`location C : x = ${x},y = ${y}`);

// Move Down to F
x++;
moves.push(board[x][y]); //F
console.log(`location F : x = ${x},y = ${y}`);

// Move left to E
y--;
moves.push(board[x][y]); //E
console.log(`location E : x = ${x},y = ${y}`);


console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4

// -m "game solution"