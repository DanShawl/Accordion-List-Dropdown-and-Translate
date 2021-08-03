import React from 'react';
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

//    What happens is: option is passed to setSelected through onSelectedChange
//    Selected gets changed and is then passed back to Dropdown with its new values

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
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
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
