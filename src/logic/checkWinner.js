
import { WINNER_COMBOS } from '../constantes'

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      // tenemos un ganador
      return boardToCheck[a]
    }
  }
  // no se encontro ganador
  return null
}
