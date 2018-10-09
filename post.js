/* Dozuki API Calls
Author: Chad Lagomarsino
Date: Oct 8, 2018
Description: Command Line Tool to make a GET request from the
Dozuki API. Current configuration allows the user to filter
guides by author username.
*/

// Auth Token "bb324c902f7bec3b1b73db49db7cd2b4"

// 3rd party node module for HTTP calls
const request = require('request');

// POST REQUEST
request({
  method: 'POST',
  url: 'https://gunnerautomotive.dozuki.com/api/2.0/work_log',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'bb324c902f7bec3b1b73db49db7cd2b4'
  },
  body: {
    foo: 'bar'
  },
  json: true
}, (error, response, body) => {
  //log status code
  console.log(`statusCode: ${response.statusCode}`);
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(body);
  }
});
