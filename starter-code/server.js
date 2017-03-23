'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file
//package.json populated -Isak James
const express = require('express');
const app = express();
// TODO: Require the Express package that you installed via NPM, and instantiate the app
//Express package requied in package.json
// Remember to install express, and be sure that it's been added to your package.json as a dependency

const PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('/new', function(request, response){
  response.sendFile('/public/new.html', {root: '.'});
})

app.get('*', function(request, response) {
  // TODO: Using the response object, send the index.html file back to the user
  response.sendFile('/public/index.html', {root: '.'});
});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

app.listen(PORT, function() {
  console.log('The port is ' + PORT);
  // TODO: Log to the console a message that lets you know which port your server has started on
});
