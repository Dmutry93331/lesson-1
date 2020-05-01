'user string';

let money, time;

function start() {
         money = +prompt("Ваш бюджет на месяц");
        time = prompt("Введите дату в формате YYYY-MM-DD");

 while (isNaN(money) || money == "" || money == null) {  //isNaN команда возвращает true когда туда попадают не цифры
    money = +prompt("Ваш бюджет на месяц");

 }

}
start();


    appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function(){
            for (i = 0; i < 2; i++) {
                a = prompt("Введите обязательную статью расходов в этом месяц", ''),
                b = prompt("Во сколько обойдется?", '');
            
                if ((typeof(a))=== 'string' && typeof(a) != null && typeof(b) != null  // в данном условии a получаем строку, а не равно 0, b тоже не равно 0
                && a != "" && b != '' && a.length < 50) {  // а не равно пустой строке , b не равно пустой строке , length означает символов меньше 50
                    console.log("very good");
                    appData.expenses [a] = b;
                } else {
                    i = i - 1;
                }
            
            }
        },
        detectDayBudget: function() {
            appData.mobeyPerDay = (appData.budjet / 30).toFixed(); // toFixed округляем полученое число если пустое то до нуля , 1 до первого значения и т д

            alert ("Ежедневный бюджет: " + appData.mobeyPerDay);
            
        },

        detectLevel: function() {
            if (appData.mobeyPerDay < 100 ) {
                console.log("Минимальный уроверь достатка")
            }else if (appData.mobeyPerDay > 100 && appData.mobeyPerDay < 2000) {
                console.log("Средний уровень достатка");
            }else if (appData.mobeyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            }else {
                console.log("Произошла ошибка");
            }
        
        },
        checkSavings: function() {
            if (appData.savings == true);
                  let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");

                 appData.monthIcome = save/100/12 * persent;
               alert("Доход в месяц с вашего депозита: " + appData.monthIcome);
        },

        chooseOptExpenses: function () {
            for (let i = 0; i < 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function() {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)" , '');
                if (typeof (items) != String|| items == '' || typeof(items) == null ) {
                    console.log("Вы ввели некоректные данные или не ввели их вовсе")
                }else {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что то еще?"));
                appData.income.sort();
        }
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }

    };

    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }


