import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
//  AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwD1M
const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Hebrew',
    value: 'iw',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div className="">
      <div className="ui form container">
        <div className="field">
          <label htmlFor="" className="label">
            Enter Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />
      <hr />
      <h3 className="ui header container">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
