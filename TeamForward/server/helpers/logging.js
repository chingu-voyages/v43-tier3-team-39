const LOGGING_ENABLED = true;

const log = (...messages) => {
  if (LOGGING_ENABLED) {
    console.log(messages);
  }
};

module.exports = log;
