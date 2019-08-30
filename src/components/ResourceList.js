import React from 'react';
import useResources from './useResources';

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }
//   async componentDidMount() {
// const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);
// this.setState({ resources: response.data });
//   }
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resourceName !== this.props.resourceName) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);
//       this.setState({ resources: response.data });
//     }
//   }
//   render() {
// return (
//   <ul>
//     {this.state.resources.map(resource => (
//       <li key={resource.id}>{resource.title}</li>
//     ))}
//   </ul>
// )
//   }
// }
// class based component refactored into function based component below

// a custom hook that we are creating. by convention, all hooks are named starting with 'use'
// we have refactored the logic from our component into an individual hook variable
// this is useful if, for example, we want to reuse the logic from this function elsewhere in our programs
// we could take this one step further and create this function in a separate file and import it here in this file
// const useResources = (resourceName) => {
//   const [resources, setResources] = useState([]);
//   const fetchResources = async (resourceName) => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
//     setResources(response.data);
//   }
//   useEffect(() => {
//     fetchResources(resourceName)
//   }, [resourceName])
//   // useEffect will check to see if the array (resourceName) changes -- if it has changed, then it will update the component
//   // if it hasn't changed, it will not make any further requests -- this is excellent for us to prevent unnecessary requests
//   return resources;
// }

const ResourceList = ({ resourceName }) => {
  // const [resources, setResources] = useState([]);
  // const fetchResources = async (resourceName) => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
  //   setResources(response.data);
  // }
  // useEffect(() => {
  //   fetchResources(resourceName)
  // }, [resourceName])
  // // useEffect will check to see if the array (resourceName) changes -- if it has changed, then it will update the component
  // // if it hasn't changed, it will not make any further requests -- this is excellent for us to prevent unnecessary requests
  // // we can see this if we inspect and look under the network tab
  // this is refactored into a custom hook above

  const resources = useResources(resourceName);
  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList;
