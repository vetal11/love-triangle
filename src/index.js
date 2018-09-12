/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;

  for (var i = 0; i < preferences.length; i++){
    if (preferences[i] == 0) continue;
    var person1 = preferences[i] - 1;
    if (person1 == i) continue;
    var person2 = preferences[person1] - 1;
    if (person1 == person2) continue;
    var person3 = preferences[person2] - 1;
    if (person2 == person3) continue;
    if (person3 == i) {
      count++;
    };
  }
  
  return count/3;
};
