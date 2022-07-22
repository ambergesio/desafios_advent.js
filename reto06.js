const sumPairs = (numbers, result) => {
    for (var a = 0; a < numbers.length; a++) {

        for (var b = a+1; b < numbers.length; b++) {
            let tempResult = numbers[a] + numbers[b];
            if (tempResult === result) {
                return [numbers[a], numbers[b], `position ${a}`,`position ${b}`]
            }
        }
    }
    return null;
};

const resultado = sumPairs([0,17,29,2,5,1,123,54,87654,34,47,54,786,34,8,9,7,5,4,23,4,34,6,6,75,456,4,26,9,-4], 68);
console.log(resultado);

//[ 34, 34, 'position 9', 'position 13' ]