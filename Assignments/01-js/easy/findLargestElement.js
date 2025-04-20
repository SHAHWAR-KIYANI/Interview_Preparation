/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) 
{
    if (numbers.length === 0) return undefined; // Return undefined if the array is empty

    let largest_number = numbers[0]; // Initialize largest_number with the first element of the array
    for (let i = 1; i < numbers.length; i++) { // Start from the second element
        if (numbers[i] > largest_number) { // Compare current element with largest_number
            largest_number = numbers[i]; // Update largest_number if current element is larger
        }
    }
    return largest_number; // Return the largest number found
}

module.exports = findLargestElement;