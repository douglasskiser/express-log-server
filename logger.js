const SplunkLogger = require('splunk-logging').Logger;

// const Logger = SplunkLogger({
//   token: '',
//   url: ''
// });

module.exports = payload => console.log('Logged: ', payload);

// Logger.send(
//   payload,
//   (err, res, body) => {
//     if (!err && body.text === 'Success') {
//       console.log('Splunk message logged', payload);
//     }
//   }
// );
