const inputArr = [1, [2, 3, [4, 5, [6, 7], 8]]]

function flattenArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            const nestedArray = flattenArray(arr[i]);
            newArr = [...newArr, ...nestedArray];
        } else{
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

const transformedArray = flattenArray(inputArr);
console.log(transformedArray);

const expectedOutputArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Expected Output:::", expectedOutputArray);