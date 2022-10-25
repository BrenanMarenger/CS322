const fs = require('fs');
const hw = require('./hw.js');

// incrementer(delta)
//    incrementer returns a function of one argument
//     that returns the argument value + delta

function cs322_assert(aBoolean, aMsg) {
	if (aBoolean)
		console.log(aMsg + " passed");
	else
		console.log(aMsg + " failed");
}

const plusSeven = hw.incrementer(7);
const plusTwo = hw.incrementer(2);

cs322_assert(plusSeven(3) === 10, "plusSeven(3)");
cs322_assert(plusSeven(7) === 14, "plusSeven(7)");
cs322_assert(plusTwo(3) === 5, "plusTwo(3)");
cs322_assert(plusTwo(7) === 9, "plusTwo(7)");

// rms()
//	rms() is a function of a variable number of numbers
//      Calculate the root mean square of the values.
//      square all the numbers, add them up, find the average, take the square root.
//   nb. the class Math has a static method sqrt()
//   nb. use map and reduce to calculate your answer

cs322_assert(Math.abs(hw.rms(2.3, 3.1, 4.4) - 3.3793490497431606) < 0.0001, "hw.rms(2.3, 3.1, 4.4)");
hw.processMklog('mklog', 'newmklog');


// deal with mklogs
//     You are given a file called, mklog, that is the output of make and gcc. 
// There are many warning messages of the form:
// src/tran/tstack.c:84: warning: enumeration value ‘stLit’ not handled in switch
//  Create a regular expression that matches the whole line, 
//  and has a subexpression for the file path, the line number 
//  and the actual warning message.

// Export a function name processMklog with 2 arguments:
//	mklogName -- name of the mklog file to process
//	outfilename -- name of the output file
//   This function should use a regular expression to match
// a gcc warning line. This regular expression should have 3 sub-patterns,
// pathname, line number, and warning message.
//   For each match, create an array of the 3 sub-patterns and push it 
// onto a list of warnings.
//
// Create a private function condenseMklog with 2 arguments:
//      warnings array
//      output file name
//   For a B or lower grade, this function should stringify the warnings 
// and write them to the output file.
//   For an A, use an object as a dictionary such that:
//      the keys of this object are the pathnames
//      the value at each path name is an object whose keys are line numbers
//      the value at a line number is an array of error messages for that line.

// Note:
//   Object.keys(anObj)  will return the "keys" as an array
//   Array has a method includes(aValue) 
//        that returns true if aValue is present in the array
//   Array has a method push(aValue)
//        that adds aValue to the end of the array
//   You may use array indexing to create keys in an object that are numbers, 
//   but you may not use "." notation to access them. You must use "[]".
