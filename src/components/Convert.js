import React, { useState, useEffect } from 'react';
import axios from 'axios';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

//  Building a Language convertion component

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  //  everytime we update text, we want to wait 500ms before sending a request
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    //  cleanup function to reset the timeout if text is changed before 500ms
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      //  doTranslation is a helper function so we can use async await

      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);
  return (
    <div className="">
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
