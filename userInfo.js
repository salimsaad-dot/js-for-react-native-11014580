//task 3
// userInfo.js

/**
 * Creates user profiles from original names and modified names.
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profiles.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('Both arrays must be of the same length');
    }
    
    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
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