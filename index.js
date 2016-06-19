"use strict";

let https = require('https');
let instagramUrl = 'https://www.instagram.com/';

https.get(instagramUrl, function(res) {
  
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

  // consume response body
  res.resume();
}).on('error', function(error) {
  console.log(`Got error: ${error.message}`);
});