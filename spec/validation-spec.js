//console.info('validation-spec.js');

describe("validation", function () {

    var validation = require('../validation');

    it("permits a single char", function () {
        var isValid = validation.isValid('a');
        expect(isValid).toBe(true);
    });

    it("rejects a double char", function () {
        var isValid = validation.isValid('aa');
        expect(isValid).toBe(false);
    });

    it("rejects a small number", function () {
        var isValid = validation.isValid('1');
        expect(isValid).toBe(false);
    });
    
    it("rejects a big number", function () {
        var isValid = validation.isValid('11111');
        expect(isValid).toBe(false);
    });
});
