const formatTime = require('../formatTime');

describe('Given a date & time string YYYY-MM-DD*HH:MM:SS, return this in the following format: HH:MM:SS UTC, YYYY/MM/DD', () => {
    test('Given "2024-08-13T22:37:02Z", return "22:37:02 UTC, 2024/08/13"', () => {
        const string = "2024-08-13T22:37:02Z";
        expect(formatTime(string)).toBe("22:37:02 UTC, 2024/08/13");
    });
    test('Given "2023-07-19T00:30:09Z", return "00:30:09 UTC, 2023/07/19"', () => {
        const string = "2023-07-19T00:30:09Z";
        expect(formatTime(string)).toBe("00:30:09 UTC, 2023/07/19");
    });
    test('Given "2024-12-01T15:03:59Z", return "15:03:59 UTC, 2024/12/01"', () => {
        const string = "2024-12-01T15:03:59Z";
        expect(formatTime(string)).toBe("15:03:59 UTC, 2024/12/01");
    });
});
