import React, { useState, useEffect } from 'react';
import axios from 'axios';

//  Building the Search Component
//    1.  Build out a functional component with search fields
//          - use hooks to store the value of the input (the term)
//    2.  Use useEffect to to send a search query
//          - store the async function in a function
//          - store the data object returned from the await axios.get
//          - use an if statement to check if the there is a term
//    3.  Store the state of the results from the query using useState
//          - store the data from the response in the results state
//    4.  Map over results to render a list
//          - list should include a container div with title and snippet
//    5.  Create button and dangerously set inner HTML
//    6.  create setTimeout function wrapping the search() call
//          - return a clearTimeout with the id of the setTimeout func
//    7.  Wrap the timeout and cleartimeout inside a conditional
//          - conditional should check if there is a term and any results
//          - if there is a term and no results yet, invoke search()
const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
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
      <div className="ui celled list">{renderedResults}</div>
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

//  Default Search Term: ------------------------------------------------
//    - avoids errors involving sending empty queries
//    TWO OPTIONS:
//      1.  provide a default value
//      2.  use an if statement to test if term is defined before invoking search()

//  useEffect's cleanup function ----------------------------------------
//    1.  Initial Component Render:
//          a. function provided to useEffect is called
//          b. return a cleanup function
//    2.  Rerender
//          a. invoke the cleanup function
//          b. function provided to useEffect is called again
//          c. return a cleanup function
//    3.  Rerender: This cycle repeats over and over

//  Searching on Initial Render -----------------------------------------
