console.log('App.js is running');

// JSX - Javascript XML

const app = {
  title: 'Indecision App',
  subtitle: 'This is subtitle',
  options: ['one', 'two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0) ? 'here are your options' : 'No options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);


const user = {
  name: 'Oscar',
  age: 9,
  location: 'CDMX'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonimus'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)