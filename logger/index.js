// const SplunkLogger = require('splunk-logging').Logger;

// const Logger = SplunkLogger({
//   token: '',
//   url: ''
// });

const logIt = payload => {
  console.log('Logged: ', payload);
  // Logger.send(
  //   payload,
  //   (err, res, body) => {
  //     if (!err && body.text === 'Success') {
  //       console.log('Splunk message logged', payload);
  //     }
  //   }
  // );
};

module.exports = logIt;
