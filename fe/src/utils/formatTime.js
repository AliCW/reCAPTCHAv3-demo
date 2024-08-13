const formatTime = (string) => {
    const date = string.slice(0, 10).replaceAll("-", "/");
    const time = string.slice(11, 19);
    return time + " UTC, " + date;
};

module.exports = formatTime;