import { CREATE_GAME } from '../actions/create-player'

export default function updatePlayers( state = [], { type } ) {
  switch (type) {
    case CREATE_GAME :
      return "ABCDEFGH".repeat(2).split("")
    default :
      return state
  }
}
