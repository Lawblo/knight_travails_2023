import { square_coordinate, board_contents, square_list } from './types'

class Board implements Board {
  board: board_contents
  visited_nodes: square_list

  constructor() {
    this.board = this.initialize_board()
    this.visited_nodes = []
  }


  initialize_board(): board_contents {
    let new_board = new Array
    for (let i = 0; i < 8; i++) {
      let row = new Array(8)
      row.fill(' ')
      new_board.push(row)
    }
    return new_board
  }

  display_board(): void {
    for (let i: number = 7; i > -1; i--) {
      let row: Array<string> = this.board[i]
      console.log('  --------------------------------')
      let rowstr: string = `${i + 1}`
      row.forEach((cell: string) => {
        rowstr += '| '
        rowstr += cell
        rowstr += ' '
      })
      rowstr += '|'
      console.log(rowstr)
    }
    console.log(' --a---b---c---d---e---f---g---h--')
  }

  set_visited(loc: square_coordinate, icon: string): void {
    let x = loc[0]
    let y = loc[1]

    this.board[x][y] = icon
    this.visited_nodes.push(loc)
  }
}

export { Board }
