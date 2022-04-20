let sum = 0;

for (let i=0; i < 5; i++) {
    const userNumbers = parseInt(prompt('Inserisci un numero'));
    sum += userNumbers;
    console.log(userNumbers, i);
}

console.log(sum);