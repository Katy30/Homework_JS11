/*Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути
від 4 до 10 символів. Приклад: validateUsr('a') => false, validateUsr('p1pp1') => true, validateUsr('asd43_34') => true */

let button=document.querySelector(".btn");
button.addEventListener("click", function () {
    let inp=document.getElementById("user_name").value;
    if(/^\S{4,10}$/.test(inp)){
        alert("Ваш name валідний!")
    } else {
        alert("Ваш name не валідний! Будь ласка перевірте його ще раз!")
    }

})