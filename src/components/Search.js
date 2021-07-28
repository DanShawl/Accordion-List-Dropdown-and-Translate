import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get();
    };
  }, [term]);

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

//  useEffect ----------------------------------------------------------
//    Allows function components to use something like lifecycle methods
//    We configure the hook to run code automatically in 1 of 3 scenarios

//    1.  When the component is rendered for the first time only
//    2.  When the component is rendered for the first time + rerenders
//    3.  When the compoent is rendered for the first time + rerenders IF some piece of data has changed

//    How to use useEffect:
//      1.  import it with useState
//      2.  call useEffect inside the component, first arg is a func
//                useEffect( () => {} )
//            - code inside will be auto. executed at some point in time
//      3.  Configure it to which scenario will trigger it
//                useEffect( () => { console.log('hola')}, [])
//            - this is done in the 2nd argument
//            - either: [], [term], or nothing
//            - can have more than one item in the array as well
//      3a. [] = run at initial render
//      3a. nothing = run at initial render + every rerender
//      3a. [data] = initial render + every rerender IF data has changed

//  Using async await with useEffect
//    cannot use it directly in the arrow function of the useEffect()
//      XXX   useEffect(async () => {await axios('dfs')}, [term])
//    We CAN use a helper function

//            useEffect(() => {
//                 const search = async () => {
//                    await axios.get('dfs')
//                 }
//                 search();
//             }, [term])
