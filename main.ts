import { square_coordinate, square_list } from './src/types'
import { Board } from './src/Board'
import { Knight } from './src/Knight'


function knightMoves(start: square_coordinate, end: square_coordinate) {
  let board: Board = new Board()
  let first_knight: Knight = new Knight(start, end, board)
  let queue: Knight[] = [first_knight]
  while (queue.length > 0) {
    let knight = queue.shift()!
    if (Knight.is_equal(knight.start, end)) {
      return knight.route
    }
    handle_knight(knight, board, end, queue)
  }
}

function handle_knight(knight: Knight, board: Board, end: square_coordinate, queue: Knight[]): void {
  let possible_moves: square_list = knight.get_possible_moves()

  for (let move of possible_moves) {
    board.set_visited(move, 'x')
    queue.push(new Knight(move, end, board, knight.route))
  }
}

let final_route: square_list = knightMoves([4, 0], [3, 7])!
let final_board = new Board()

for (let move of final_route) {
  final_board.set_visited(move, 'x')
}

final_board.display_board()

