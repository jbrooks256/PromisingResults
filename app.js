// slowMath.add(6,2)
// .then(res => {
//     console.log(res);
//     return slowMath.multiply(res, 2);
// }).then(res => {
//     console.log(res);
//     return slowMath.divide(res, 4);
// }).then(res => {
//     console.log(res);
//     return slowMath.subtract(res, 3);
// }).then(res => {
//     console.log(res);
//     return slowMath.add(res, 98);
// }).then(res => {
//     console.log(res);
//     return slowMath.remainder(res, 2);
// }).then(res => {
//     console.log(res);
//     return slowMath.multiply(res, 50);
// }).then(res => {
//     console.log(res);
//     return slowMath.remainder(res, 40);
// }).then(res => {
//     console.log(res);
//     return slowMath.add(res, 32);
// }).then(res => {
//     console.log(`The final result is ${res}`);
// }).catch(err => {
//     console.log(err)
// });

async function doMath() {
    try { let result = await slowMath.add(6,2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add( result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(`The final result is ${result}`);
    } catch (error) {
        console.log(error)
    }
}

doMath()