const formatErrors = (string) => {

    return string.split('-').map((element) => {
        return element.slice(0, 1).toUpperCase() + element.slice(1, element.length);
    }).join(' ');

};

module.exports = formatErrors;