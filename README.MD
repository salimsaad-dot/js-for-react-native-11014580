# Array and User Profile Manipulation Project

**Student ID**: 11014580

## Overview

This project consists of JavaScript functions to manipulate arrays and create user profiles. The tasks are divided into three main parts:

### Task 1: Array Manipulation (`arrayManipulation.js`)

- **Function**: `processArray`
- **Description**: Takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled.
- **Example Usage**:
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  console.log(processedNumbers); 


  Task 2: String Formatting (arrayManipulation.js)
Function: formatArrayStrings
Description: Takes two arrays: one of strings and one of numbers processed by processArray. It modifies each string based on the corresponding number: capitalizes the entire string if the number is even, and converts it to lowercase if the number is odd.
const strings = ["hello", "world", "JavaScript", "is", "fun"];
const numbers = [2, 3, 4, 5, 6];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["HELLO", "world", "JAVASCRIPT", "is", "FUN"]



Task 3: User Profile Creation (userInfo.js)
Function: createUserProfiles
Description: Takes an array of original names and an array of modified names. It returns an array of objects, each containing originalName, modifiedName, and an id (auto-incremented starting from 1).
const originalNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "diana", "EVE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: 'Alice', modifiedName: 'ALICE' },
//   { id: 2, originalName: 'Bob', modifiedName: 'bob' },
//   { id: 3, originalName: 'Charlie', modifiedName: 'CHARLIE' },
//   { id: 4, originalName: 'Diana', modifiedName: 'diana' },
//   { id: 5, originalName: 'Eve', modifiedName: 'EVE' }
// ]

