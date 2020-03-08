// Implement the function calculateHanoi that accepts diskNumber and turnsSpeed parameters. 
// diskNumber is a number of disks and turnsSpeed is the speed of moving discs (in turns per hour (t/(1*3600)). Both parameters are numbers.
// calculateHanoi function returns an object with 2 properties:
// turns (minimum number of turns to solve the puzzle)
// seconds (minimum number of seconds to solve the puzzle at a given turnsSpeed).
// You don't need to validate parameters.
//--------------------------------------------------------------------------------------------------------
//It can be shown that for a tower of n disks, 
//there will be required 2^n − 1 transfers of individual disks to shift the tower completely to another peg.

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let turns = (2**disksNumber) - 1;
    let seconds = turns/(turnsSpeed/3600);
    return {seconds: seconds, turns: turns};
}