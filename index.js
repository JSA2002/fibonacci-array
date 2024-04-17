export default function generateFibonacciSeries(n) {
    let fibonacciSeries = [];
    if (n < 79) {
        let a = 0, b = 1;
        for (let i = 0; i < n; i++) {
            fibonacciSeries.push(a);
            let temp = a + b;
            a = b;
            b = temp;
        }
    } else {
        fibonacciSeries = [BigInt(0), BigInt(1)];
        for (let i = 2; i < n; i++) {
            let nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
            fibonacciSeries.push(nextFibonacci);
        }
        fibonacciSeries = fibonacciSeries.map(num => num.toString());
    }
    return fibonacciSeries;
}

