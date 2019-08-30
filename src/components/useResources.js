import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useResources = (resourceName) => {
    const [resources, setResources] = useState([]);
    const fetchResources = async (resourceName) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
        setResources(response.data);
    }
    useEffect(() => {
        fetchResources(resourceName)
    }, [resourceName])
    // useEffect will check to see if the array (resourceName) changes -- if it has changed, then it will update the component
    // if it hasn't changed, it will not make any further requests -- this is excellent for us to prevent unnecessary requests
    return resources;
}

export default useResources;