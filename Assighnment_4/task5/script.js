const processData = function(arr, callback) {

    if (callback === calculateSum) {
        console.log(callback(arr));

    }
    if (callback === filterOut) {
        console.log(callback(arr));
    }
    if (callback === doubleNumbers) {
        console.log(callback(arr));
    }
    if (callback === findMax) {
        console.log(callback(arr));
    }
}

function calculateSum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function filterOut(arr) {
    return arr.filter((val) => val % 2 == 0);
}

function doubleNumbers(arr) {

    return arr.map((val) => val * 2);
}

function findMax(arr) {
    return arr.reduce((acc, val) => {

        if (acc < val) {
            return val;
        } else {
            return acc;
        }
    }, arr[0])
}

processData([1, 2, 3, 4], filterOut);
processData([1, 2, 3, 4], doubleNumbers);
processData([1, 2, 3, 4], calculateSum);
processData([1, 66, 3, 4], findMax);

/*
output :
PS C:\Users\bhushan\Desktop\BM\bm-training\Assighnment_4\task5> node .\script.js
[ 2, 4 ]
[ 2, 4, 6, 8 ]
10
66
*/