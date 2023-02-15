const _ = require('lodash')
const Board = require('./Board.js')

function Knight(start, end, board = Board(), route = new Array) {
  const MOVES = [
    [1, 2], [2, 1],
    [2, -1], [1, -2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2]
  ]

  route = [...route, start]
  let children = []

  let possibleMoves = MOVES
    .map(move => newPosistion(move))
    .filter(move => moveOnBoard(move))

  function newPosistion(move) {
    return [start[0] + move[0], start[1] + move[1]]
  }

  function moveOnBoard(move) {
    return newPosistion(move).every(loc => loc < 8 && loc >= 0)
  }

  return {
    start,
    route,
    possibleMoves
  }
}

module.exports = Knight
