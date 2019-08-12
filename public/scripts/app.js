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

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "here are your options" : "No options"), React.createElement("button", {
    disabled: app.options.length <= 1,
    onClick: onMakeDecision
  }, "What should I do?"), React.createElement("button", {
    onClick: removeAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option) {
    return React.createElement("li", {
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
