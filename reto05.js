const daysToXmas = (date) => {
    const Xmas = new Date('Dec 25, 2021 00:00:00').getTime();
    const daysToXmas = Math.ceil((Xmas - date.getTime()) / 86400000); 
    return daysToXmas;
}


const date1 = new Date('Dec 1, 2021')
const fecha1 = daysToXmas(date1) // 24
console.log(fecha1);
const date2 = new Date('Dec 24, 2021 00:00:01')
const fecha2 = daysToXmas(date2) // 1
console.log(fecha2);
const date3 = new Date('Dec 24, 2021 23:59:59')
const fecha3 = daysToXmas(date3) // 1
console.log(fecha3);
const date4 = new Date("December 20, 2021 03:24:00")
const fecha4 = daysToXmas(date4) // 5
console.log(fecha4);

