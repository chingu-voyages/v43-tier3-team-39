const LOGGING_ENABLED = (false);

const log = (...messages) => {
    if (LOGGING_ENABLED) {
        console.log(messages);
    }
};

export default log;
