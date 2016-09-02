import { CREATE_GAME } from '../actions/create-game'

export default function createGame( state = [], { type } ) {
  switch (type) {
    case CREATE_GAME :
      const symbols = 'ABCDEFGH'.repeat(2).split('')
      return symbols
        .map((symbol) => ({ flipped: false, symbol }))

    default :
      return state
  }
}
