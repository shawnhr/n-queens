/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //input = # of board size(n)
  //output = solution array
  //create a new board
  //iterate through each row
    //iterate through each column
      //toggle piece
      //check for conflicts
        //if there is a conflict
          //remove piece
        //if no conflict
          //add row to the solution
  //return solution

  var solution = []; //fixme

  var board = new Board({n: n});

  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
      }
    }
    //console.log("board:",board.attributes[row]);
    solution.push(board.attributes[row]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //input: board size(n)
  //output: number of solutions
  //create a new board
  //create inner function
  //set base case: stop when row === n
    //increment solutionCount
  //recursive case:
    //if there is no conflict
      //recurse
    //if there is a conflict
      //remove piece
  //return solutionCount
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  var row = 0;

  var traverse = (row) => {
    //base case
    if (row === n) {
      solutionCount++;
      return;
    }
    //recursive case
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        traverse(row + 1);
      }
      board.togglePiece(row, col);
    }
  }

  traverse(row);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //input = board size
  //output = array
 
  var solution = 0; //fixme

  var board = new Board({n: n});
  var flag = false;
  var cnt = 0;

  var traverse = function(row) {
    if(row === n) {
      cnt++;

      flag = true;
      return;
    }
    for ( var col = 0; col < n; col++){
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        traverse(row + 1);
      }
      if (flag) {
        return;
      }
      board.togglePiece(row, col);
    }
  }; traverse(0);

  solution = board.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution;


};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return solutionCount;
  }

  var traverse = (row) => {
    //base case
    if (row === n) {
      solutionCount++;
      return;
    }
    //recursive case
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        traverse(row + 1);
      }
      board.togglePiece(row, col);
    }
  }

  traverse(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
