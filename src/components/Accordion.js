// import { render } from '@testing-library/react';
import React, { useState } from 'react';

//  Step 1: create accordion component accepting props
//    - destructure props
//  Step 2: map over items to get title and content
//    - store these in a variable and return the value
//  Step 3: render list of items from the map
//  Step 4: useState to change active class
//    - create a method that invokes on click

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;

//  Class vs Functional Components --------------------------------------
//    const [activeIndex, setActiveIndex] = useState(null);

//    'state = {activeIndex: 0}' = 'useState(0)'
//    'this.state.activeIndex' = 'activeIndex'
//    'this.setState({ activeIndex: 10 })' = 'setActiveIndex(10)'

//  Throttling API Requests
//    - waiting a certain amount of time to send the request
