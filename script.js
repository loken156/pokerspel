const colors = ['Hjärter', 'Ruter', 'Klöver', 'Spader']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
const deck = []
const players = {
  Slim: [],
  Luke: []
}
const burnedCards = []


for (const color of colors){
  for(const value of values) {
    const card = {
      color: color,
      value: value
    };
    deck.push(card)
  }
}

function shuffleDeck(deck) {
  return deck.sort(() => Math.random() - 0.5) 
}
function givecards(){
  for (let i = 0; i < 5; i++){
  players.Slim.push(deck.pop())
  players.Luke.push(deck.pop())
  }
  let slimValue = calcValue(players.Slim)
  let lukeValue = calcValue(players.Luke)
  return { deck, Slimhand: players.Slim, slimValue, Lukehand: players.Luke, lukeValue }
}
function displaycards(){
  console.log('Kvarvarande kort', deck)
  console.log('Slims hand ', players.Slim)
  console.log('Lukes hand ', players.Luke)

}

function throwCards(){
  for(let i = 0; i < 2; i++){
    burnedCards.push(players.Slim.pop())
    burnedCards.push(players.Luke.pop())
  }
}

function secondHand(){
  for (let i =0; i < 2; i++){
    players.Slim.push(deck.pop())
    players.Luke.push(deck.pop())
  }
  let slimValue = calcValue(players.Slim)
  let lukeValue = calcValue(players.Luke)
  return {deck, Slimhand: players.Slim, slimValue, Lukehand: players.Luke, lukeValue}
} 





function calcValue(hand){
  let totalvalue = 0 
  for(const card of hand){
    totalvalue += parseInt(card.value)
  }
  return totalvalue
}

function throwAll(){
  burnedCards.push(...players.Slim, ...players.Luke)
  players.Slim = []
  players.Luke = []
  return {deck, burnedCards, Slimhand: players.Slim, Lukehand: players.Luke}
}

function restart(){
  deck.push(...burnedCards)
  return deck
}