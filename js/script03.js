/*Створити інпут який отримує пін код ( це 4 цифрових значення). За допомогою регулярки перевітити чи валідний пін код
ввів користувач */
let button=document.querySelector(".btn");
button.addEventListener("click", function () {
    let inp=document.getElementById("pcode").value;
    if(/^\d{4}$/.test(inp)){
        alert("Ваш пінкод валідний!")
    } else {
        alert("Ваш пінкод не валідний! Будь ласка перевірте його ще раз!")
    }

})
