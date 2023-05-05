/* Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість*/
function countUpperCaseLetters(str) {
    const uppercaseLetters = str.match(/[A-ZА-Я]/g);
    return uppercaseLetters ? uppercaseLetters.length : 0;
}

const text = "123ABCvdsfh456КАТЯcvbhj";
const count = countUpperCaseLetters(text);
console.log(count);
