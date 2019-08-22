let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
let n = number
let start = 1
let space = " "
let d = "#"
while (n !== 0) {
  n = n-1
  console.log( (space.repeat(n)) + (d.repeat(start)) )
 start = start + 1
}
