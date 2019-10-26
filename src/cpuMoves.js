const winningIndicies = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

export function cpuMoves(gameState, computerMarker) {
  // The first thing the computer should check for is if the user is in position to win on his/her next turn. If so, the computer must block the winning move.
  for (let i = 0; i < winningIndicies.length; i++) {
    // winningIndicies[i] should be scanned for 2 matching indicies in the set by the opponent's marker. The computer will simulatenously check for a blocking move as well as a winning move, to eliminate repetitive calculations
    // To make sure we do not alter the original winningCombo array, we are creating a shallow copy of the combbination using the slice() method.
    let winningCombo = winningIndicies[i].slice(0);
    let opponentMarkers = 0;
    let computerMarkers = 0;
    for (let j = winningCombo.length - 1; j >= 0; j--) {
      // For every index where an opponent's marker has been found, increment the opponent's counter and remove that index from the winningCombo array. This helps to narrow down which square the opponent is missing to win.
      // Conversely, for every index where a computer marker is found, increment the computer's counter and remove that index from the winningCombo array to help figure out which index is needed to win.
      if ((computerMarker * -1) === gameState[winningCombo[j]]) {
        opponentMarkers++;
        winningCombo.splice(j, 1);
      } else if (computerMarker === gameState[winningCombo[j]]) {
        computerMarkers++;
        winningCombo.splice(j, 1);
      }
    }
    // If the remaining space is found, either for a block or the win, place the computer marker there.
    if ((opponentMarkers === 2 || computerMarkers === 2) && winningCombo.length === 1)
      return winningCombo[0];
  }
  // By reaching this point, it is likely that neither a blocking or winning move was needed at this time. The next task the computer will do is check if the middle space (index 4) is already occupied. If it is not, the computer will place a marker there.
  if (gameState[4] === 0)
    return 4;
  // If the middle space is taken, the next best move would be to occupy one of the 4 corner spaces (indicies 0, 2, 6, or 8). To determine which of these spaces to occupy, the computer will analyze the path of least resistance and make its decision after that.
  // First, the computer will determine which (if any) of the corner spots are open.
  var openCorners = [];
  if (gameState[0] === 0)
    openCorners.push(0);
  if (gameState[2] === 0)
    openCorners.push(2);
  if (gameState[6] === 0)
    openCorners.push(6);
  if (gameState[8] === 0)
    openCorners.push(8);
  // The computer now knows which corners are open, and will find all winning combinations involving these corners.
  var combosConsidered = [];
  for (let i = 0; i < openCorners.length; i++) {
    combosConsidered = combosConsidered.concat(winningIndicies.filter(c => c.includes(openCorners[i])));
  }
  var openSpots = [];
  for (let i = 0; i < combosConsidered.length; i++) {
    // As was done earlier for the blocking/winning move, a shallow copy of the winning combination is created so that the original remains unchanged.
    let combo = combosConsidered[i].slice(0);
    // If a user's marker is found in one of the spaces of a winningCombo, the remaining open spots will be recorded in the openSpots array, with the index corresponding to the index of the same array in combosConsidered.
    for (let j = combo.length - 1; j >= 0; j--) {
      if ((computerMarker * -1) === gameState[combo[j]])
        combo.splice(j, 1);
      openSpots[i] = combo.concat(combo.length);
    }
  }
  console.log('array of moves', openSpots);
}
