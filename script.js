let money = +prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

    appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false 

    };

for (i = 0; i < 2; i++) {
    a = prompt("Введите обязательную статью расходов в этом месяц", ''),
    b = prompt("Во сколько обойдется?", '');

    if ((typeof(a))=== 'string' && typeof(a) != null && typeof(b) != null  // в данном условии a получаем строку, а не равно 0, b тоже не равно 0
    && a != "" && b != '' && a.length < 50) {  // а не равно пустой строке , b не равно пустой строке , length означает символов меньше 50
        console.log("very good");
        appData.expenses [a] = b;
    } else {
        console.log("bad resultat");
        i --;
    }

};


appData.mobeyPerDay = appData.budjet / 30;

alert ("Ежедневный бюджет: " + appData.mobeyPerDay);

if (appData.mobeyPerDay < 100 ) {
    console.log("Минимальный уроверь достатка")
}else if (appData.mobeyPerDay > 100 && appData.mobeyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.mobeyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("Произошла ошибка")
}




