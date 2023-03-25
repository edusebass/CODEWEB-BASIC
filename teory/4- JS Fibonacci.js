//Previosly should learn the loops, for example: while and for. Also should be learn conditions, for example: if, else .
function fibonacciGenerator (n) {
    output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        for (var i = 2; i <= n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);
        }    
    }
    return output;
}
output = fibonacciGenerator(5);
console.log(output);
