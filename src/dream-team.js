// Dream team
// Imagine you and your friends decide to create a dream team.
//This team should have a cool secret name that contains encrypted information about it.
//For example, these may be the first letters of the names of its members in upper case sorted alphabetically.
//Your task is to implement the createDreamTeam(members) function that returns name of a newly made team (string)
//based on the names of its members (Array). Good luck!
// Names of the members should be strings. Values with other type should be ignored. In case of wrong members type function must return false.
// NB! Team member name may contain whitespaces.
// For example:
// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
// Write your code in src/dream-team.js.
module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
  let arr = members.filter(function(i) {
    return parseFloat(i) !== parseFloat(i) && typeof i == "string";
  });
  let k = arr.map(k => k.trim().split(""));
  let l = [];
  for (let a = 0; a < k.length; a++) {
    l[a] = k[a][0];
  }
 return l.join('').toUpperCase().split('').sort().join('');}
else return false;  
};
