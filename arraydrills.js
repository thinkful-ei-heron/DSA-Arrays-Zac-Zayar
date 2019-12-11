function URLify(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') result += '%20';
		else result += str[i];
	}
	return result;
}

const input1 = 'tauhida parveen'
const input2 = 'www.thinkful.com /tauh ida parv een'
// console.log(URLify(input2))

function filter(arr, cb) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (cb(arr[i])) {
			result.push(arr[i])
		}
	}
	return result
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(filter(array, item => item < 5))

function maxSum(arr) {
	let sum = 0;
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (sum > max) max = sum;
	}
	return max;
}

const inputArr = [4, 6, -3, 5, -2, 1];
// console.log(maxSum(inputArr));

function mergeSorted(array1, array2) {

	let result = []

	while (array1.length > 0 || array2.length > 0) {
		if (array1.length === 0) {
			result = result.concat(array2)
			break
		}
		if (array2.length === 0) {
			result = result.concat(array1)
			break
		}
		if (array1[0] <= array2[0]) {
			result.push(array1[0])
			array1.splice(0, 1)
		} else if (array2[0] < array1[0]) {
			result.push(array2[0])
			array2.splice(0, 1)
		}
	}
	return result;
}

const array1 = [1, 3, 6, 8, 11]
const array2 = [2, 3, 5, 8, 9, 10]
// console.log(mergeSorted(array1, array2))

function removeChar(str, remove) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let pass = true;
		for (let j = 0; j < remove.length; j++) {
			if (str[i] === remove[j]) pass = false;
		}
		if (pass) result += str[i];
	}
	return result;
}

const inputStr = 'Battle of the Vowels: Hawaii vs. Grozny';
const inputRemove = 'aeiou';
// console.log(removeChar(inputStr, inputRemove));

function Products(array) {
	let result = []
	for (let i = 0; i < array.length; i++) {
		let product = 1
		for (let j = 0; j < array.length; j++) {
			if (j === i) continue
			product *= array[j]
		}
		result.push(product)
	}
	return result
}

const testarray = [1, 3, 9, 4]
// console.log(Products(testarray))

function twoD(grid) {
  const newGrid = [];

  for (let i = 0; i < grid.length; i++) {
	  newGrid.push([...grid[i]]);
  }

	// i is each row
	for (let i = 0; i < grid.length; i++) {
		// j is each column
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 0) {
				// k goes through each column in one row
				for (let k = 0; k < grid[i].length; k++) {
					newGrid[i][k] = 0;
				}
				// m goes through each row
				for (let m = 0; m < grid.length; m++) {
					newGrid[m][j] = 0;
				}
			}
		}
	}

	return newGrid;
}

const testGrid = [
	[1, 0, 1, 1, 0],
	[0, 1, 1, 1, 0],
	[1, 1, 1, 1, 1],
	[1, 0, 1, 1, 1],
	[1, 1, 1, 1, 1]
];
// console.log(twoD(testGrid));

function stringRotation(str1, str2) {
  let newStr1 = str1
  for (let i = 0; i < str1.length; i++){
    let first
    if (newStr1 === str2) return true
    first = newStr1[0]
    newStr1 = newStr1.slice(1) + first

  }
  return false
}

const str1 = 'amazon'
const str2 = 'azonam'
const str3 = 'azonma'

console.log(stringRotation(str1, str3))