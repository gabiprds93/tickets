type Bill = 25 | 50 | 100
type CanSell = "SI" | "NO"

function tickets(peopleInQueue: Bill[]): CanSell {
  let count25 = 0
  let count50 = 0

  for (const bill of peopleInQueue) {
    if (bill === 25) {
      count25++
    } else if (bill === 50) {
      if (count25 === 0) {
        return "NO"
      }

      count25--
      count50++
    } else if (bill === 100) {
      if (count50 >= 1 && count25 >= 1) {
        count50--
        count25--
      } else if (count25 >= 3) {
        count25 -= 3
      } else {
        return "NO"
      }
    }
  }

  return "SI"
}

// Ejemplos:
console.log(tickets([25, 25, 50])) // SI
console.log(tickets([25, 100])) // NO
console.log(tickets([25, 25, 50, 50, 100])) // NO
