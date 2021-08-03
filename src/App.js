// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

//  What i need for my fitness app:
//  1.  Todo functionality with local storage
//      Components:
//          ExerciseList (stored daily), ExerciseItem, ExerciseNote
//      - create/delete/store exercise items
//          - items should include name, note, optional sets/reps/time
//      - exercise items should be grouped each day
//      - require note at the end for entire workout
//      - should be stored through local storage saved for each day
//      - able to view previous workouts
//  2.  Calendar similar to github on homepage

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
];

const items = [
  {
    title: 'What is React?',
    content: 'React is a from end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite js library among engineers.',
  },
  {
    title: 'How do you use react?',
    content: 'You use react by creating components.',
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      <Dropdown
        options={options}
        selected={selected}
        // setSelected={setSelected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};
