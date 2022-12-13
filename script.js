let reestr = [[],[],[],[],[]];
let date = new Date;
let n = 0;
for (n;;n++) {
    if (n == 10) {
        alert("Введено макисмальное количество значений");
        break;
    }
    reestr[n][0] = prompt('Введите "Собака" или "Кот"');
    reestr[n][1] = prompt("Введите породу вашего домашнего животного");
    reestr[n][2] = prompt("Введите кличку вашего домашнего животного");
    reestr[n][3] = prompt("Введите дату рождения вашего домашнего животного (например: 01.01.2000)");
    let day = reestr[n][3].split('.')[0];
    let month = reestr[n][3].split('.')[1];
    let year = reestr[n][3].split('.')[2];
    if (date.getMonth()>month) {
        reestr[n][4] = date.getFullYear()-year;
    }
    else if (date.getMonth()<month) {
        reestr[n][4] = date.getFullYear()-1-year;
    }
    else {
        if (date.getDay()>day) {
            reestr[n][4] = date.getFullYear-year;
        }
        else if (date.getDay()<day) {
            reestr[n][4] = date.getFullYear()-1-year;
        }
        else {
            console.log("С днём рождения, ", reestr[n][0]);
            reestr[n][4] = date.getFullYear-year;
        }
    }
    if ((confirm("Хотите ввести ещё одно животное?")) == false) {
        break;
    }
}
for (let i = 0; i <= n; i++) {
    console.log(i+1);
    console.log(reestr[i][0]);
    console.log("Порода:", reestr[i][1]);
    console.log("Кличка:", reestr[i][2]);
    console.log("Дата рождения:", reestr[i][3]);
    console.log("Полных лет:", reestr[i][4]);
    console.log('\n');
}