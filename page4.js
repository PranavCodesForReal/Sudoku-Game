function getQueryParams() {
    const params = {};
    const queryString = window.location.search;

    if (queryString) {
         const pairs = queryString.slice(1).split("&");
        pairs.forEach((pair) => {
            const [key, value] = pair.split("=");
            params[key] = decodeURIComponent(value);
        });
    }

    return params;
}

// Use the function to get the 'game' parameter
const queryParams = getQueryParams();
const gameNumber = queryParams.game;
const levelNumber = queryParams.level;
// 3 arrays 
const level1 = [
[
[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]
],
[
[1, 0, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 6, 0, 0, 3],
[0, 0, 5, 0, 0, 8, 6, 0, 0],
[0, 0, 0, 0, 5, 0, 0, 0, 7],
[0, 8, 0, 0, 6, 0, 0, 9, 0],
[9, 0, 0, 0, 4, 0, 0, 0, 0],
[0, 0, 3, 5, 0, 0, 9, 0, 0],
[6, 0, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 0, 1]
],
[
[0, 0, 7, 0, 9, 0, 2, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 0, 3],
[0, 1, 0, 5, 0, 6, 0, 4, 0],
[0, 0, 5, 0, 8, 0, 6, 0, 0],
[0, 0, 0, 3, 0, 2, 0, 0, 0],
[0, 0, 9, 0, 4, 0, 8, 0, 0],
[0, 7, 0, 9, 0, 1, 0, 2, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 5],
[0, 0, 6, 0, 2, 0, 7, 0, 0]
],
[
[8, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 3, 6, 0, 0, 0, 0, 0],
[0, 7, 0, 0, 9, 0, 2, 0, 0],
[0, 5, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 4, 5, 7, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 3, 0],
[0, 0, 1, 0, 0, 0, 0, 6, 8],
[0, 0, 8, 5, 0, 0, 0, 1, 0],
[0, 9, 0, 0, 0, 0, 4, 0, 0]
],
[
[0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 6, 0, 0, 5, 0, 4, 0],
[0, 0, 3, 4, 0, 0, 0, 0, 0],
[0, 5, 0, 0, 7, 0, 3, 0, 0],
[0, 0, 0, 0, 9, 0, 0, 0, 0],
[0, 0, 2, 0, 3, 0, 0, 5, 0],
[0, 0, 0, 0, 0, 3, 9, 0, 0],
[0, 8, 0, 7, 0, 0, 1, 0, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 0]
],
[
[0, 4, 0, 0, 0, 0, 8, 0, 5],
[0, 0, 0, 0, 0, 0, 0, 3, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 7, 0, 0, 0, 0, 0],
[0, 0, 4, 0, 5, 0, 3, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 7, 0, 0],
[0, 2, 0, 0, 0, 0, 0, 0, 0],
[4, 0, 5, 0, 0, 0, 0, 1, 0]
],
[
[7, 0, 0, 0, 0, 0, 2, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 6, 0],
[0, 0, 8, 6, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 7, 0, 0, 0, 0],
[0, 0, 0, 4, 0, 2, 0, 0, 0],
[0, 0, 0, 0, 5, 0, 3, 0, 0],
[0, 0, 0, 0, 0, 8, 9, 0, 0],
[0, 7, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 5, 0, 0, 0, 0, 0, 4]
],
[
[0, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 3],
[0, 7, 4, 0, 8, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 3, 0, 0, 2],
[3, 0, 0, 0, 6, 0, 0, 0, 5],
[8, 0, 0, 5, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 0, 4, 1, 0],
[4, 0, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 0]
],
[
[0, 0, 0, 2, 0, 0, 0, 6, 3],
[3, 0, 0, 0, 0, 5, 4, 0, 0],
[0, 0, 0, 0, 4, 6, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 6, 0, 0],
[0, 0, 0, 3, 0, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 5],
[0, 0, 0, 7, 2, 0, 0, 0, 0],
[0, 0, 7, 8, 0, 0, 0, 0, 4],
[4, 5, 0, 0, 0, 3, 0, 0, 0]
],
[
[0, 0, 0, 0, 0, 0, 6, 8, 0],
[0, 0, 0, 0, 7, 3, 0, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 3, 6, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 8],
[0, 0, 0, 0, 0, 1, 4, 0, 0],
[0, 8, 0, 0, 0, 0, 0, 0, 9],
[0, 0, 0, 3, 6, 0, 0, 0, 0],
[0, 2, 5, 0, 0, 0, 0, 0, 0]
]
]


const level2 = [
[
[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]
],
[
[1, 0, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 6, 0, 0, 3],
[0, 0, 5, 0, 0, 8, 6, 0, 0],
[0, 0, 0, 0, 5, 0, 0, 0, 7],
[0, 8, 0, 0, 6, 0, 0, 9, 0],
[9, 0, 0, 0, 4, 0, 0, 0, 0],
[0, 0, 3, 5, 0, 0, 9, 0, 0],
[6, 0, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 0, 1]
],
[
[0, 0, 7, 0, 9, 0, 2, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 0, 3],
[0, 1, 0, 5, 0, 6, 0, 4, 0],
[0, 0, 5, 0, 8, 0, 6, 0, 0],
[0, 0, 0, 3, 0, 2, 0, 0, 0],
[0, 0, 9, 0, 4, 0, 8, 0, 0],
[0, 7, 0, 9, 0, 1, 0, 2, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 5],
[0, 0, 6, 0, 2, 0, 7, 0, 0]
],
[
[8, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 3, 6, 0, 0, 0, 0, 0],
[0, 7, 0, 0, 9, 0, 2, 0, 0],
[0, 5, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 4, 5, 7, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 3, 0],
[0, 0, 1, 0, 0, 0, 0, 6, 8],
[0, 0, 8, 5, 0, 0, 0, 1, 0],
[0, 9, 0, 0, 0, 0, 4, 0, 0]
],
[
[0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 6, 0, 0, 5, 0, 4, 0],
[0, 0, 3, 4, 0, 0, 0, 0, 0],
[0, 5, 0, 0, 7, 0, 3, 0, 0],
[0, 0, 0, 0, 9, 0, 0, 0, 0],
[0, 0, 2, 0, 3, 0, 0, 5, 0],
[0, 0, 0, 0, 0, 3, 9, 0, 0],
[0, 8, 0, 7, 0, 0, 1, 0, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 0]
],
[
[0, 4, 0, 0, 0, 0, 8, 0, 5],
[0, 0, 0, 0, 0, 0, 0, 3, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 7, 0, 0, 0, 0, 0],
[0, 0, 4, 0, 5, 0, 3, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 7, 0, 0],
[0, 2, 0, 0, 0, 0, 0, 0, 0],
[4, 0, 5, 0, 0, 0, 0, 1, 0]
],
[
[7, 0, 0, 0, 0, 0, 2, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 6, 0],
[0, 0, 8, 6, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 7, 0, 0, 0, 0],
[0, 0, 0, 4, 0, 2, 0, 0, 0],
[0, 0, 0, 0, 5, 0, 3, 0, 0],
[0, 0, 0, 0, 0, 8, 9, 0, 0],
[0, 7, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 5, 0, 0, 0, 0, 0, 4]
],
[
[0, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 3],
[0, 7, 4, 0, 8, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 3, 0, 0, 2],
[3, 0, 0, 0, 6, 0, 0, 0, 5],
[8, 0, 0, 5, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 0, 4, 1, 0],
[4, 0, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 0]
],
[
[0, 0, 0, 2, 0, 0, 0, 6, 3],
[3, 0, 0, 0, 0, 5, 4, 0, 0],
[0, 0, 0, 0, 4, 6, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 6, 0, 0],
[0, 0, 0, 3, 0, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 5],
[0, 0, 0, 7, 2, 0, 0, 0, 0],
[0, 0, 7, 8, 0, 0, 0, 0, 4],
[4, 5, 0, 0, 0, 3, 0, 0, 0]
],
[
[0, 0, 0, 0, 0, 0, 6, 8, 0],
[0, 0, 0, 0, 7, 3, 0, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 3, 6, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 8],
[0, 0, 0, 0, 0, 1, 4, 0, 0],
[0, 8, 0, 0, 0, 0, 0, 0, 9],
[0, 0, 0, 3, 6, 0, 0, 0, 0],
[0, 2, 5, 0, 0, 0, 0, 0, 0]
]
]
const level3 = [
[
[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]
],
[
[1, 0, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 6, 0, 0, 3],
[0, 0, 5, 0, 0, 8, 6, 0, 0],
[0, 0, 0, 0, 5, 0, 0, 0, 7],
[0, 8, 0, 0, 6, 0, 0, 9, 0],
[9, 0, 0, 0, 4, 0, 0, 0, 0],
[0, 0, 3, 5, 0, 0, 9, 0, 0],
[6, 0, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 0, 1]
],
[
[0, 0, 7, 0, 9, 0, 2, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 0, 3],
[0, 1, 0, 5, 0, 6, 0, 4, 0],
[0, 0, 5, 0, 8, 0, 6, 0, 0],
[0, 0, 0, 3, 0, 2, 0, 0, 0],
[0, 0, 9, 0, 4, 0, 8, 0, 0],
[0, 7, 0, 9, 0, 1, 0, 2, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 5],
[0, 0, 6, 0, 2, 0, 7, 0, 0]
],
[
[8, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 3, 6, 0, 0, 0, 0, 0],
[0, 7, 0, 0, 9, 0, 2, 0, 0],
[0, 5, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 4, 5, 7, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 3, 0],
[0, 0, 1, 0, 0, 0, 0, 6, 8],
[0, 0, 8, 5, 0, 0, 0, 1, 0],
[0, 9, 0, 0, 0, 0, 4, 0, 0]
],
[
[0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 6, 0, 0, 5, 0, 4, 0],
[0, 0, 3, 4, 0, 0, 0, 0, 0],
[0, 5, 0, 0, 7, 0, 3, 0, 0],
[0, 0, 0, 0, 9, 0, 0, 0, 0],
[0, 0, 2, 0, 3, 0, 0, 5, 0],
[0, 0, 0, 0, 0, 3, 9, 0, 0],
[0, 8, 0, 7, 0, 0, 1, 0, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 0]
],
[
[0, 4, 0, 0, 0, 0, 8, 0, 5],
[0, 0, 0, 0, 0, 0, 0, 3, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 7, 0, 0, 0, 0, 0],
[0, 0, 4, 0, 5, 0, 3, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 7, 0, 0],
[0, 2, 0, 0, 0, 0, 0, 0, 0],
[4, 0, 5, 0, 0, 0, 0, 1, 0]
],
[
[7, 0, 0, 0, 0, 0, 2, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 6, 0],
[0, 0, 8, 6, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 7, 0, 0, 0, 0],
[0, 0, 0, 4, 0, 2, 0, 0, 0],
[0, 0, 0, 0, 5, 0, 3, 0, 0],
[0, 0, 0, 0, 0, 8, 9, 0, 0],
[0, 7, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 5, 0, 0, 0, 0, 0, 4]
],
[
[0, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 3],
[0, 7, 4, 0, 8, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 3, 0, 0, 2],
[3, 0, 0, 0, 6, 0, 0, 0, 5],
[8, 0, 0, 5, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 0, 4, 1, 0],
[4, 0, 0, 0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 0]
],
[
[0, 0, 0, 2, 0, 0, 0, 6, 3],
[3, 0, 0, 0, 0, 5, 4, 0, 0],
[0, 0, 0, 0, 4, 6, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 6, 0, 0],
[0, 0, 0, 3, 0, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 0, 5],
[0, 0, 0, 7, 2, 0, 0, 0, 0],
[0, 0, 7, 8, 0, 0, 0, 0, 4],
[4, 5, 0, 0, 0, 3, 0, 0, 0]
],
[
[0, 0, 0, 0, 0, 0, 6, 8, 0],
[0, 0, 0, 0, 7, 3, 0, 0, 0],
[5, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 3, 6, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0, 0, 0, 8],
[0, 0, 0, 0, 0, 1, 4, 0, 0],
[0, 8, 0, 0, 0, 0, 0, 0, 9],
[0, 0, 0, 3, 6, 0, 0, 0, 0],
[0, 2, 5, 0, 0, 0, 0, 0, 0]
]
]
if(levelNumber == 1){
    puzzleArray = level1;
}
else{
    if(levelNumber == 2){
        puzzleArray = level2;
    }
    else{
        puzzleArray = level3;
    }
}
function findSolution(board) {
// Check if the current placement is valid
function isValid(board, row, col, num) {
// Check row
for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
        return false;
    }
}
// Check column
for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
        return false;
    }
}
// Check 3x3 sub-grid
let startRow = Math.floor(row / 3) * 3;
let startCol = Math.floor(col / 3) * 3;
for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
            return false;
        }
    }
}
return true;
}

// Backtracking function to solve the puzzle
function solve(board) {
for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) { // Find an empty cell
            for (let num = 1; num <= 9; num++) {
                if (isValid(board, row, col, num)) {
                    board[row][col] = num;
                    if (solve(board)) { // Recursively try to solve
                        return true;
                    }
                    board[row][col] = 0; // Backtrack
                }
            }
            return false; // If no valid number can be placed
        }
    }
}
return true; // Puzzle solved
}

solve(board);
return board;
}
function createGrid() {
    const puzzle = puzzleArray[gameNumber - 1];
    const grid = document.getElementById("sudokuGrid");
    grid.innerHTML = "";

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement("input");
            cell.type = "number";
            cell.min = 1;
            cell.max = 9;
            cell.classList.add("sudoku-cell");
            cell.id = `cell-${row * 9 + col}`;

            if (puzzle[row][col] !== 0) {
                cell.value = puzzle[row][col];
                cell.readOnly = true;
            } else {
                // Add validation for input
                cell.addEventListener("input", (event) => {
                    const value = event.target.value;
                    if (value < 1 || value > 9) {
                        event.target.value = ""; // Clear invalid input
                    }
                });
            }

            grid.appendChild(cell);
        }
    }
}

function checkSolution(levelNumber){
    const solution = findSolution(puzzleArray[gameNumber-1]);
    let isCorrect = true;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellId = `cell-${row * 9 + col}`;
            const userInput = document.getElementById(cellId).value;

            if (parseInt(userInput) !== solution[row][col]) {
                isCorrect = false;
                break;
            }
        }
        if (!isCorrect) break;
    }
    
    if (isCorrect) {  
        document.getElementById('overlay1').style.display = 'flex';
    } else {
        document.getElementById('overlay2').style.display = 'flex';
    }

    
}
function backToGames(levelNumber){
    window.location.href =  `page3.html?level=${levelNumber}`;  
}
function exit(){
    window.location.href =  `index.html`;
}
function reset(){
    window.location.reload();
}
function next(gameNumber,levelNumber){
    gameNumber = parseInt(gameNumber, 10) + 1;
    if (gameNumber>10){
        alert("All games completed! Exitting...");
        exit();
    }
    else{
        window.location.href = `page4.html?level=${levelNumber}&game=${gameNumber}`;
    }
}
function solution(gameNumber){
    document.getElementById('overlay2').style.display = 'none';
    document.getElementById('submit_button').style.display = 'none';
    const puzzle = findSolution(puzzleArray[gameNumber-1]);
    const grid = document.getElementById("sudokuGrid");
    grid.innerHTML = "";

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement("input");
            cell.type = "number";
            cell.min = 1;
            cell.max = 9;
            cell.classList.add("sudoku-cell");
            cell.id = `cell-${row * 9 + col}`;
            cell.value = puzzle[row][col];
            cell.readOnly = true;

            grid.appendChild(cell);
        }
    }

    
}

window.onload = function() {
    createGrid();
}