"use strict";

console.log('App.js is running');
var template = React.createElement("h1", {
  id: "some_id"
}, "New App");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
