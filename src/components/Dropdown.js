import React, { useState } from 'react';
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

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const renderedOptions = options.map((option) => {
    console.log(option.value, selected.value);
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form container">
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
