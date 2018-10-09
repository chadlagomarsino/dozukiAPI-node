// Auth Token "bb324c902f7bec3b1b73db49db7cd2b4"

// 3rd party node module for HTTP calls
const request = require('request');
// 3rd party node module for UserInput in Command Line
const yargs = require('yargs');

//Configure command line arguments
const argv = yargs
  .options({
    // create command for username input, alias of u
    u: {
      demand: true,
      alias: "username",
      describe: 'Username of author of guides',
      string: true
    }
  })
  .help()
  .argv;

// request has an options object and a callback function to access
// specific pieces of our HTTP endpoint JSON file

//GET REQUEST
request({
  method: 'GET',
  url: 'https://gunnerautomotive.dozuki.com/api/2.0/guides',
  json: true
}, (error, response, body) => {
  if(error) {
    console.log('Unable to connect to Dozuki Servers');
  } else {
    //filter HTTP body to only include guides for the argv input username
    const filteredBody = body.filter((guide) => {
      return guide.username.toLowerCase() === argv.username.toLowerCase();
    });

    if(filteredBody.length === 0) {
      //check if user is in JSON file
      console.log("Username not found");
    } else {
      //Print type, category, title, username to console
      for(i = 0; i < filteredBody.length; i++) {
        //JSON Stringify allows for "pretty printing" of JSON data to console
        //console.log(JSON.stringify(filteredBody, undefined, 2));
        console.log(`Type: ${filteredBody[i].type}`);
        console.log(`Category: ${filteredBody[i].category}`);
        console.log(`Title: ${filteredBody[i].title}`);
        console.log(`Username: ${filteredBody[i].username}`);
        console.log(" ") // empty line
      };
    };
  };
});

//POST REQUEST
