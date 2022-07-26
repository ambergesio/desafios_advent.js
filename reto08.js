
const maxProfit = (prices) => {
    const leftHalf = Math.ceil(prices.length / 2);
    const rightHalf = Math.floor(prices.length / 2);
    const left = prices.splice(0, leftHalf);
    const right = prices.splice(-rightHalf);
    const min = Math.min(...left); 
    const max = Math.max(...right);
    if (max - min <= 0) return -1;
    return max - min;
}


const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const price1 = maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
const price2 = maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)


console.log(price1);
console.log(price2);