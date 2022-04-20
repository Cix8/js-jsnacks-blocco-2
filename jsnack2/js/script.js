const firstNamesList = ['Gigio','Ciccio','Gianpierpasquale','Giovanni','Emanuela','Lina'];
const lastNamesList = ['Tripaldi','Rossi','Bianchi','Verdi','Divella','Berardi'];
let resultList = [];
console.log(firstNamesList);
console.log(lastNamesList);

for (let index = 0; index < 3; index++) {
    const i = Math.floor(Math.random() * firstNamesList.length);
    const j = Math.floor(Math.random() * lastNamesList.length);
    const result = firstNamesList[i] + ' ' + lastNamesList[j];
    console.log(result, i, j);
    resultList.push(result);
}

console.log(resultList);