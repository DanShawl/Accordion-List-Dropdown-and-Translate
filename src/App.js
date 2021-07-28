import { render } from '@testing-library/react';
import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
  return (
    <div className="">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
