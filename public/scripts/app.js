"use strict";

console.log("App.js is running"); // JSX - Javascript XML

var app = {
  title: "Indecision App",
  subtitle: "Let me find your future...",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderIndecisionApp();
};

var appRoot = document.getElementById("app");
var numbers = [55, 101, 1000];

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "here are your options" : "No options"), React.createElement("p", null, app.options.length), React.createElement("button", {
    onClick: removeAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option) {
    React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
