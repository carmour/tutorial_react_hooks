import React, { useState } from 'react';

import ResourceList from './ResourceList';

// class App extends React.Component {
//   state = {
//     resourceName: 'posts'
//   }
//   render() {
// return (
//   <React.Fragment>
//     <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
//     <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
//     <ResourceList resourceName={this.state.resourceName}/>
//   </React.Fragment>
// )
//   }
// }
// this function refactored below into function based component using hooks

const App = () => {
  const [resourceName, setResourceName] = useState('posts');
  // resourceName is the current state
  // setResourceName is a function that changes resourceName
  // useState is a react function that takes in one param === initialState
  // why an array? array destructuring
  // basically we have created an array called useState with two values: resourceName and setResourceName

  return (
    <React.Fragment>
      <button onClick={() => setResourceName('posts')}>Posts</button>
      <button onClick={() => setResourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  )
}

export default App;