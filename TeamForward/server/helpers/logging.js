const LOGGING_ENABLED = (false);

const log = (...messages) => {
    if (LOGGING_ENABLED) {
        console.log(messages);
    }
};

module.exports = log;
