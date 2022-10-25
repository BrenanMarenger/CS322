let fs = require('fs');

exports.incrementer = function incrementer(delta) {
    f = (value) => {
        return value + delta
    }
    return f;
}

exports.rms = function rms() {
    let args = Array.from(arguments);
    //squares
    let square = args.map(function (value) {
        return Math.pow(value, 2);
    });
    //adds
    let numArgs = 0;
    function getSum(total, num) {
        numArgs++;
        return total + num;
    }
    args = square.reduce(getSum, 0);
    //average
    args = args / numArgs;
    //Square root
    return Math.sqrt(args);
}

// new: ([a-z]*\/[a-z]*\/[a-zA-Z0-9]*.[a-z]):([0-9]*): [a-z]*: (.*)
//old: ([a-z]*\/[a-z]*\/[a-zA-Z0-9]*).([a-z]:[0-9]*):( [a-z]*: .*)
exports.processMklog = function (mklogName, outfilename) {
    reg = new RegExp(/([a-z]*\/[a-z]*\/[a-zA-Z0-9]*.[a-z]):([0-9]*): [a-z]*: (.*)/gm)
    let matches = [];
    let myFile = fs.readFileSync(mklogName).toString();
    myFile.replace(reg, function (a, b, c) {
        matches.push([a, b, c])
    });
    condenseMklog(matches, outfilename);
}

condenseMklog = function (warnings, outfilename) {
    let compiled = ""
    for (i = 0; i < warnings.length; i++) {
        for (j = 0; j < warnings[i].length; j++) {
            compiled += warnings[i][j];
            objWarning.pathname[i][1] = wanring[i][j];
        }
        compiled += "\n";
    }
    fs.writeFileSync(outfilename, compiled.toString())
}

let objWarning = {
    pathname: [
        { lineNum: ["warning"] }
    ]
}

console.log(Object.keys(objWarning))

//objWarning.pathname[0] = "The Path";
//objWarning.pathname[0].lineNum[0] = "Warning1"
console.log(objWarning.pathname[0])
//console.log(objWarning.pathname[0].lineNum[0])

//.includes("Warning1")
//console.log(Object.keys(objWarning.pathname.lineNum[1]))

//console.log(warningMatches.join('\n')))
warningMathches(){

    //return spread of array with pattern
}

exports.processMklog2 = function (infile, outfile) {
    fs.readFile(infile, 'utf-8', function (err, data) {
        if (err) {
            console.log("Error!!")
        } else {

            let matches = warningMathches(data);
            let fileNames = matches.map((each) => each[1]);
            let names = {};
            fileNames.forEach((each) => names[each] = 0);
            //fileNames.reduce((obj, each)=>{obj[each]=0, return obj}, {});
        }
    })
}
