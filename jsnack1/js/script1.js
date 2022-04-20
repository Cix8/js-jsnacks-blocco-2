let sum = 0;
let i = 0;

while (i < 5) {
    const userNumbers = parseInt(prompt('Inserisci un numero'));
    sum += userNumbers;
    console.log(userNumbers,i);
    i++;
}

console.log(sum);
