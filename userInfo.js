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
const originalNames = ["Ayitey", "Bernice", "Christiana", "Dennis", "Emma"];
const modifiedNames = ["AYITEY", "bernice", "CHRISTIANA", "dennis", "EMMA"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: 'Ayitey', modifiedName: 'AYITEY' },
//   { id: 2, originalName: 'Bernice', modifiedName: 'bernice' },
//   { id: 3, originalName: 'Christiana', modifiedName: 'CHRISTIANA' },
//   { id: 4, originalName: 'Dennis', modifiedName: 'dennis' },
//   { id: 5, originalName: 'Emma', modifiedName: 'EMMA' }
// ]
