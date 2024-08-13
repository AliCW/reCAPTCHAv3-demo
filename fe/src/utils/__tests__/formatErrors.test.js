const formatErrors = require('../formatErrors');

describe('Capitalise & remove hyphens from strings & return', () => {
    test('Given "missing-input-secret", return "Missing Input Secret"', () => {
        const string = 'missing-input-secret';
        expect(formatErrors(string)).toBe("Missing Input Secret");
    });
    test('Given "bad-request", return "Bad Request"', () => {
        const string = 'bad-request';
        expect(formatErrors(string)).toBe("Bad Request");
    });
    test('Given "timeout-or-duplicate", return "Timeout Or Duplicate"', () => {
        const string = 'timeout-or-duplicate';
        expect(formatErrors(string)).toBe("Timeout Or Duplicate");
    });
});



// missing-input-secret 	The secret parameter is missing.
// invalid-input-secret 	The secret parameter is invalid or malformed.
// missing-input-response 	The response parameter is missing.
// invalid-input-response 	The response parameter is invalid or malformed.
// bad-request 	The request is invalid or malformed.
// timeout-or-duplicate 	The response is no longer valid: either is too old or has been used previously.