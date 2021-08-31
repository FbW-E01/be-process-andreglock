// Check argv[2]:
function calculate () {
    if (process.argv[2] === 'sum') {
        // do sum:
        let sum = 0;
        for (let i = 3; i < process.argv.length; i++) {
            // break with non numeric input
            if (isNaN(parseInt(process.argv[i]))) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`);
                return;
            }
            sum += parseInt('Sum:', process.argv[i]);
        }
        console.log(sum);
    
    } else if (process.argv[2] === 'avg') {
        // do avg:
        let sum = 0;
        for (let i = 3; i < process.argv.length; i++) {
            // break with non numeric input
            if (isNaN(parseInt(process.argv[i]))) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`);
                return;
            }
            sum += parseInt('Average:', process.argv[i]);
        }
        console.log(sum / (process.argv.length - 3));
    
    } else if (process.argv[2] === 'med') {
        // do med:
        const numbers = [];
        for (let i = 3; i < process.argv.length; i++) {
            // break with non numeric input
            if (isNaN(parseInt(process.argv[i]))) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`);
                return;
            }
            numbers.push(parseInt(process.argv[i]));
        }
        // sort the array from smaller to larger
        numbers.sort((a, b) => a - b)
        if (numbers.length % 2 === 0) { // even amount
            console.log('Median:', (numbers[numbers.length/2] + numbers[numbers.length/2 - 1]) / 2);
        } else { // odd amount
            console.log('Median:', numbers[Math.floor(numbers.length/2)]);
        }
        console.log(numbers);

    } else {
        // return message:
        console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
    }
}

calculate();