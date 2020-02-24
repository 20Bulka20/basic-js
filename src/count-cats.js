module.exports = function countCats(matrix) {
  let t = matrix.join(",").split(",").filter(i => i == '^^');
  if (t.length !== 0) return t.length;
  else return 0;
};
