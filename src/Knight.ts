import _ from 'lodash'
import { square_list, square_coordinate } from './types'
import { Board } from './Board'

class Knight {
  start: square_coordinate
  end: square_coordinate
  board: Board
  route: square_list
  children: Knight[]
  possible_moves: square_list

  constructor(start: square_coordinate, end: square_coordinate, board: Board, route: square_list = new Array) {
    //console.log('Creating knight', start)
    this.start = start
    this.end = end
    this.board = board
    this.route = [...route, start]
    //console.log('Route:', this.route)
    this.possible_moves = this.get_possible_moves()
    this.children = new Array
  }

  static MOVES: square_list = [
    [1, 2], [2, 1],
    [2, -1], [1, -2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2]
  ]

  get_possible_moves() {
    return Knight.MOVES
      .map((move: square_coordinate) => this.new_posistion(move))
      .filter((move: square_coordinate) => this.move_on_board(move))
      .filter((move: square_coordinate) => this.move_is_unique(move))
  }

  new_posistion(move: square_coordinate): square_coordinate {
    let new_x = this.start[0] + move[0]
    let new_y = this.start[1] + move[1]
    return [new_x, new_y]
  }

  move_on_board(move: square_coordinate): Boolean {

    return move.every((loc: number) => loc < 8 && loc >= 0)
  }

  move_is_unique(new_move: square_coordinate): Boolean {
    let visited_nodes: square_list = this.board.visited_nodes
    return !visited_nodes.some(previous_move => Knight.is_equal(previous_move, new_move))
  }

  static is_equal = (move_1: square_coordinate, move_2: square_coordinate) => _.isEqual(move_1, move_2)
}

export { Knight }
