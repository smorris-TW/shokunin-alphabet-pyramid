//console.info('validation.js');

function isValid(input) {
    var regex = /^[a-zA-z]$/;
    return regex.test(input); 
}

module.exports = {
    isValid: isValid
};
