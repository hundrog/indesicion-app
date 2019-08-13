class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggle() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Toggle Visibility</h1>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? "Hide details" : "show details"}
        </button>
        {this.state.visibility && <div>Some details</div>}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById("app"));
// console.log("App.js is running");

// let visibility = false;

// const toogleButton = () => {
//   visibility = !visibility;
//   render();
// };

// const appRoot = document.getElementById("app");
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Toggle App</h1>
//       <button onClick={toogleButton}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>These are the details</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(jsx, appRoot);
// };
// render();
