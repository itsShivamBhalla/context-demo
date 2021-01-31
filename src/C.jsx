import React, { useContext } from 'react';
import {fname,lname} from './App';


const C = ()=>
{

const x= useContext(fname);
const y = useContext(lname);
    return(
        <>
       <h1>My name is {x} {y}</h1>
        
        </>)
}

export default C;