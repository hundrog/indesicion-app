console.log("App.js is running");

let visibility = false;

const toogleButton = () => {
  visibility = !visibility;
  render();
};

const appRoot = document.getElementById("app");
const render = () => {
  const jsx = (
    <div>
      <h1>Toggle App</h1>
      <button onClick={toogleButton}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>These are the details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
};
render();
