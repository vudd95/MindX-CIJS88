/* 
1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

Example: 	array1 = [1,2,3,4,5,6];
			array2 = [3,4,8,9,12];
			=> [3,4]
*/

//Exc1
console.log("- Bai 1: Tim cac phan tu giong nhau trong Array")
function checkNumberExist(arr1, arr2){
    return arr1.filter(element => arr2.includes(element))
}

const array1_1 = [1,2,3,4,5,6]
const array1_2 = [3,4,5,8,9,12]


console.log('Phan tu trung nhau la: ' + checkNumberExist(array1_1,array1_2))

/*
2. Find 2 elements with the greatest sum in an array
Example: [1,7,9,2,5,3,8] => [9,8]
 */
console.log("- Bai 2: Tim 2 phan tu Max trong Array")

function findTwoMaxValue(arr) {
    if (arr.length < 2) {
      return null;
    }
    arr.sort((a, b) => b - a);
    return [arr[0], arr[1]];
  }
const array2 = [1,2,3,9,10,5,7,8]

console.log("2 phan tu lon nhat trong mang la: " + findTwoMaxValue(array2))


/**
 * 3. Find pairs of elements whose sum is equal to a given number
 * Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
 */

console.log('- Bai 3: Find pairs of elements whose sum is equal to a given number')
function findPair(arr){
    const result = []
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[i] + arr[j] == 10)
            result.push([arr[i], arr[j]]) 
        }
    }
    return result
}

const array3 = [1,7,9,2,5,3,8]
console.log('Pair: ' + findPair(array3))

/**
 * 4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
 * Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
 */

console.log('- Bai 4: Get a new array from the given array so that the elements appear only once')
function filerArrayAppear(arr) {
    const filterArray = [];
    
    for (const element of arr) {
      if (!filterArray.includes(element)) {
        filterArray.push(element);
      }
    }
  
    return filterArray;
  }

const array4 = [1,2,1,2,13,4,5,5,6,7,8,8]
console.log('Filter Array: ' + filerArrayAppear(array4))

/**
 * 5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
 * Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
 * const arr2 = [3, 5, 9, 10, 88];
 * => [3,5,9]
 */

console.log('- Bai 5: Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array')
const array5_1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7]
const array5_2 = [3, 5, 9, 10, 88]

const array5_3 = checkNumberExist(array5_1,array5_2)
console.log('New array: ' + filerArrayAppear(array5_3))

/**
 * 6. Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.
Example: 	const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
		const myFunc = (inputArr) => {
			// write your code here
		}
		const arr2 = myFunc(arr1); // [2,3,1,5]
 */
console.log('- Bai 6: ')
function findUniqueElement(arr){
    const result = []
    for (const element of arr) {
        if (!result.includes(element)) {
          result.push(element);
        }
      }
}

const array6 = [1,2,3,4,2,3,5,3,1,1,5,2,3]
console.log(findUniqueElement(array6))