/* Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер
та повертає його */
function clearString(str){
    return  parseInt( str.replace(/\D/g, ''));
}

console.log(clearString("ugfANcv12кцф78ВАрпвgS32"))