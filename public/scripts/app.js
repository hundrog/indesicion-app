"use strict";

console.log("App.js is running"); // JSX - Javascript XML

var app = {
  title: "Indecision App",
  subtitle: "This is subtitle",
  options: ["one", "two"]
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "here are your options" : "No options"), React.createElement("ol", null, React.createElement("li", null, "Item 1"), React.createElement("li", null, "Item 2")));
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: addOne
  }, "+1"), " \xA0", React.createElement("button", {
    onClick: minusOne
  }, "-1"), " \xA0", React.createElement("button", {
    onClick: reset
  }, "reset"));
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
