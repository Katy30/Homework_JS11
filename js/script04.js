/*Створити регулярку яка отримує адресс сторінки і повертає тільки адресс*/
const url = 'https://prog.academy/?page=1';
const pageUrl = url.replace(/(\?.*)$/, '');
console.log(pageUrl);