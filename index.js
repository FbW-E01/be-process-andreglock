// Check argv[2]:
function calculate () {
    if(process.argv[2] === 'sum') {
        // do sum:
        let sum = 0;
        for (let i = 3; i < process.argv.length; i++) {
            // break with non numeric input
            if (isNaN(parseInt(process.argv[i]))) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`);
                return;
            }
            sum += parseInt(process.argv[i]);
        }
        console.log(sum);
    
    } else if(process.argv[2] === 'avg') {
        // do avg:
        let sum = 0;
        for (let i = 3; i < process.argv.length; i++) {
            // break with non numeric input
            if (isNaN(parseInt(process.argv[i]))) {
                console.log(`Sorry, the argument '${process.argv[i]}' is not a number, please try again`);
                return;
            }
            sum += parseInt(process.argv[i]);
        }
        console.log(sum / (process.argv.length - 3));
    
    } else {
        // return message:
        console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
    }
}

calculate();