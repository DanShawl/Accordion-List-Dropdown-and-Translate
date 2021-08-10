import React, { useState, useEffect, useRef } from 'react';
//  Creating a dropdown
//    1.  Create an array of objects that are our options
//    2.  create a Dropdown functional component that accepts the options
//    3.  map over the options and return a div with each options label
//    4.  return the renderedOptions in jsx
//          - includes .ui.form.container -> .field -> label.label,
//          - .ui.selection.dropdown.visible.active -> i.dropdown.icon,
//          - .text, .menu.visible.transition with renderedOptions
//    5.  useState for our selected options inside export of App.js
//    6.  pass these to Dropdown and use onClick to change option
//    7.  Remove the selected option with a conditional
//    8.  Show/hide dropdown w/ state (true/false to toggle classes)
//          - setOpen to the opposite of whatever it is onClick
//          - Use ternary operators to add classes

//    What happens is: option is passed to setSelected through onSelectedChange
//    Selected gets changed and is then passed back to Dropdown with its new values

// bubble, slowness,

//  Gesture based house/apartment searching app
//  Maybe apply that to fitness somehow?

/*
useEffect(() => {
  document.body.addEventListener(
    "click", 
    () => {
      setOpen(false);
    },
    {capture: true} 
  )
}, [])
*/
const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        // console.log(event.target);
        setOpen(false);
      }
      // { capture: true }
    );
  }, []);
  const renderedOptions = options.map((option) => {
    // console.log(option.value, selected.value);
    if (option.value === selected.value) {
      return null;
      // if the option value = selected value, render nothing
    }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {/* returns a div that will change the state of the selected option on click*/}
        {option.label}
      </div>
    );
  });
  // console.log(ref.current);
  return (
    <div ref={ref} className="ui form container">
      <div className="field">
        <label htmlFor="" className="label">
          Select a Color
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

//  Event Bubbling -------------------------------------------------------
//  When a div is clicked on that has an event handler attached, an event object is created
//  The event object then travels up to the next parent element
//  if the parent element has a click event handler, it is automatically invoked
// then, it gos to the next parent element
// THIS IS THE REASON FOR THE MENU OPENING AND CLOSING

//  Two scenarios:
//  1. We dont want the body event listener to do anything if we click inside the ddropdown
//  2.  If we click outside of the dropdown, we want the body event listener to open/close the dropdown

//  How do we figure out what element was clicked?
//    - use event.target with any event handler (make sure its passed in)
//  How do we figure out if that element was in the dropdown
//    - useRef
