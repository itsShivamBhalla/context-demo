import React, { createContext } from 'react';
import A from './A'

const fname = createContext();
const lname = createContext();
const App = ()=>
{

   


    return(
        <>
        <fname.Provider value="Shivam">
        <lname.Provider value="Bhalla">
        <A/>
        </lname.Provider>
        </fname.Provider>
    
        </>)
}

export default App;
export {fname,lname};