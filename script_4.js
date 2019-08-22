const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Voici les entrepeneurs qui sont nés dans les année 70")
var n = 0
while (n !== 18 ) {
if (entrepreneurs[n].year >= 1970 && entrepreneurs[n].year <= 1980)
console.log(entrepreneurs[n])
n = n+1 }

console.log("Voici le prénom et nom des entrepreneurs")

var n = 0
var tab = []
while (n !== 18 ) {
tab.push(entrepreneurs[n].first + " " + entrepreneurs[n].last)
n = n+1 }
console.log(tab)

console.log("Quel âge aurait chaque entrepeneurs aujourd'hui ?")
var n = 0
while (n !== 18 ) {

console.log(tab[n] + " aurait " + (2019 - entrepreneurs[n].year) + " ans " +" aujourd'hui")
n = n+1 }


console.log("Trie par ordre alphabétique ")


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
entrepreneurs.sort(dynamicSort("last"));

// Display data with new order !
console.log(entrepreneurs);
