var first = "CCGUCGUUGCGCUACAGC"
first = first.match(/.{1,3}/g) ;

var n = 0
var tab = []
while (n !== 6 ) {
if (first[n] === "UCU" || first[n] === "UCC" || first[n] === "UCA" || first[n] === "UCG" || first[n] === "AGU" || first[n] === "AGC")
{ tab.push("Sérine")}
else if (first[n] === "CCU" || first[n] === "CCC" || first[n] === "CCA" || first[n] === "CCG")
{ tab.push("Proline")}
else if ( first[n] === "UUA" || first[n] === "UUG")
{ tab.push("Leucine")}
else if ( first[n] === "UUU" || first[n] === "UUC")
{ tab.push('Phénylalanine')}
else if ( first[n] === "CGU" || first[n] === "CGC" || first[n] === "CGA" || first[n] === "CGG" || first[n] === "AGA" || first[n] === "AGG")
{ tab.push("Arginine")}
else if ( first[n] === "UAU" || first[n] === "UAC")
{ tab.push("Tyrosine")}
n = n+1 }

console.log("CCGUCGUUGCGCUACAGC")
tab = tab.join("-")
console.log(tab)

var first = "CCUCGCCGGUACUUCUCG"
first = first.match(/.{1,3}/g) ;

var n = 0
var tab = []
while (n !== 6 ) {
if (first[n] === "UCU" || first[n] === "UCC" || first[n] === "UCA" || first[n] === "UCG" || first[n] === "AGU" || first[n] === "AGC")
{ tab.push("Sérine")}
else if (first[n] === "CCU" || first[n] === "CCC" || first[n] === "CCA" || first[n] === "CCG")
{ tab.push("Proline")}
else if ( first[n] === "UUA" || first[n] === "UUG")
{ tab.push("Leucine")}
else if ( first[n] === "UUU" || first[n] === "UUC")
{ tab.push('Phénylalanine')}
else if ( first[n] === "CGU" || first[n] === "CGC" || first[n] === "CGA" || first[n] === "CGG" || first[n] === "AGA" || first[n] === "AGG")
{ tab.push("Arginine")}
else if ( first[n] === "UAU" || first[n] === "UAC")
{ tab.push("Tyrosine")}
n = n+1 }

console.log("CCUCGCCGGUACUUCUCG")
tab = tab.join("-")
console.log(tab)
