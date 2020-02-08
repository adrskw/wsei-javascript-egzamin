function bigestSumOfTwoElements(array) {
    if (array.length == 1) {
        return array[0];
    }
    else if (array.length == 0) {
        return false;
    }
    else {
        let sortedArray = array.sort((a, b) => a - b);
        let sumOfBiggestNumbers = sortedArray[sortedArray.length - 1] + sortedArray[sortedArray.length - 2];

        return sumOfBiggestNumbers;
    }
}

// przyk³ad u¿ycia
console.log(bigestSumOfTwoElements([1, 2, 3, 4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23, 45, 17, 12]));