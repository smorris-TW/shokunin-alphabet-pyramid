//console.info('app.js');

var validation = require('./validation');

var paddingChar = ' ';

function showUsageThenExit() {
    console.info('Usage:');
    console.info('  node app.js <char>');
    console.info('Where <char> is a letter of the alphabet.');
    process.exit(1);
}

function getValidatedInput() {
    var arg = process.argv[2];
    if (validation.isValid(arg)) {
        return arg.toUpperCase();
    }
    showUsageThenExit();
}

function formatLine(charCode, minCharCode, maxCharCode) {
    var char;
    var sideOffset, centreOffset;
    var sidePadding, centrePadding;
    var lhe, rhe, line;

    sideOffset = maxCharCode - charCode;
    sidePadding = new Array(sideOffset + 1).join(paddingChar);
    centreOffset = charCode - minCharCode;
    centrePadding = new Array(centreOffset * 2 + 1).join(paddingChar);

    char = String.fromCharCode(charCode);
        
    lhe = sidePadding + char;
    rhe = (centrePadding + char).substring(1);
    line = lhe + rhe;
    
    console.info(line);
    return line;
}


function main() {
    var input = getValidatedInput();
    var minCharCode = 'A'.charCodeAt(0);
    var maxCharCode = input.charCodeAt(0);

    console.info();
    var currentCharCode = minCharCode;
    while (currentCharCode < maxCharCode) {
        formatLine(currentCharCode, minCharCode, maxCharCode);
        currentCharCode++;
    }
    while (currentCharCode >= minCharCode) {
        formatLine(currentCharCode, minCharCode, maxCharCode);
        currentCharCode--;
    }
    console.info();    
}

main();