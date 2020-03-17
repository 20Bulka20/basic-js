// Recursive depth calculator
// Go deeper
// Your task is to implement the class DepthCalculator with method calculateDepth that takes an array and returns its depth.
// calculateDepth method must pass the given array recursively. Depth of a flat array is 1. 
//Method must correctly work with arrays that contain no elements or contain empty arrays.
// For example:
// const depthCalc = new DepthCalculator(); const { calculateDepth } = depthCalc;
// calculateDepth([1, 2, 3, 4, 5]) => 1
// calculateDepth([1, 2, 3, [4, 5]]) => 2
// calculateDepth([[[]]]) => 3

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        depth = Math.max(...arr.map(elem => Array.isArray(elem) ? this.calculateDepth(elem) : 0), depth);
        return depth + 1;
    }
};