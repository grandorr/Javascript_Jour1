const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tout les livres ont été au moins empruntés une fois?")
var n = 0
while (n !== 12 ) {
if (books[n].rented === 0 ) {
var check = "Non" }
n = n+1 }

if (check === "Non") {
console.log("non") }
else
{console.log("oui")}

console.log("Quel est le livre le plus emprunté?")
var n = 0
var r = 0
while (n !== 12 ) {
if (books[n].rented > r ){
var result = books[n]
var r = books[n].rented }

n = n+1 }

console.log(result)

console.log("Quel est le livre le moins emprunté?")
var n = 0
var r = 67
while (n !== 12 ) {
if (books[n].rented < r ){
var result = books[n]
var r = books[n].rented }

n = n+1 }

console.log(result)


console.log("Le livre avec l'ID 873495?")
var n = 0
while (n !== 12 ) {
if (books[n].id === 873495) {
var result = books[n]
 }

n = n+1 }

console.log(result)


console.log("Supprime le livre avec l'ID 133712?")
var n = 0
while (n !== 12 ) {
if (books[n].id === 133712) {
var i = books.indexOf(books[n])
 }

n = n+1 }
books.splice(i, 1)
console.log(books)

/**
 * Function to sort alphabetically an array of objects by some specific key.
 *
 * @param {String}
 */
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}
books.sort(dynamicSort("title"));

console.log("Trié par ordre alphabétique sans le livre id 133712")
console.log(books);
