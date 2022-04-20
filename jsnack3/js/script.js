let userNumber = parseInt(prompt('Inserisci un numero'));
let result;

while (isNaN(userNumber)) {
    alert('Non hai inserito un numero!');
    userNumber = parseInt(prompt('Inserisci un numero'));
}

console.log(userNumber, typeof(userNumber));

for (let i = userNumber; i > 0; i--) {
    result = `${i} - ${i*i*i}`;
    console.log(result);
}