var userSay = prompt("Que voulez vous dire au bot ?")
if (userSay.length === 0 )
{ console.log("Bah alors tu dit plus rien?")
userSay = "foobar"}

if (userSay.includes("Fortnite") === true)
{ console.log("Fortnite est vraiment un jeu pour les noobs")}
if (userSay[userSay.length -1].includes("?") === true)
{ console.log("Je ne répondrais pas à cette question...")}
if (userSay.toUpperCase() === userSay)
{ console.log("Bordel ne me crie pas dessus ")}
else
{ console.log("Je m'en fou de ce que tu dit ...")}
