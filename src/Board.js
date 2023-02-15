function Board() {
  let board = initializeBoard()
  let visitedNodes = []

  function initializeBoard() {
    let board = new Array
    for (let i = 0; i < 8; i++) {
      let row = new Array(8)
      row.fill(0)
      board.push(row)
    }
    return board
  }

  function displayBoard() {
    for (let i = 7; i > -1; i--) {
      let row = this.board[i]
      console.log('  --------------------------------')
      let rowstr = `${i + 1}`
      row.forEach(cell => {
        rowstr += '| '
        rowstr += cell == 0 ? ' ' : cell
        rowstr += ' '
      })
      rowstr += '|'
      console.log(rowstr)
    }
    console.log(' --a---b---c---d---e---f---g---h--')
  }

  function markLoc(loc, icon) {
    let x = loc[0]
    let y = loc[1]

    this.board[x][y] = icon
    this.visitedNodes.push(loc)
  }

  return {
    board,
    displayBoard,
    markLoc,
    visitedNodes
  }
}

module.exports = Board
//export default Board
