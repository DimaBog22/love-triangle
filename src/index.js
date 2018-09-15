/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let arrLength = preferences.length;
    // [2, 3, 1, 5, 6, 4]

    for (let i = 0; i < arrLength; i++) {
        let trA = preferences[i];
        let trB = preferences[trA - 1];
        let trC = preferences[trB - 1];
        let finalTrC = trC - 1;

        if (finalTrC == i && trA != trB && trB != trC && trC != trA) {
            count++;
        }
    }

    return count / 3;
};
