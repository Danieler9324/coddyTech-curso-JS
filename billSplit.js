const inp = [100, 10 ,2]

let billAmount = parseFloat(inp[0]);
let tipPercentage = parseFloat(inp[1]);
let numPeople = parseInt(inp[2]);

console.log("Bill Split Calculator")

let pocentaje = tipPercentage / 100 * billAmount
let pagaT = pocentaje + billAmount
let pagaP = pagaT / numPeople
console.log(`Total (including tip): $${pagaT}`)
console.log(`Each person pays: $${pagaP}`)