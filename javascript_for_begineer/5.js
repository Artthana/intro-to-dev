function calVat(money, vat){
    return money * 7 / 100;
}

const total = calVat(1200, 7);
console.log(total);