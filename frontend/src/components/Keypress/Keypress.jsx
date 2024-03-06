import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './Keypress.scss';
export default function Keypress()  {
    const [keyPressed, setKeyPressed] = useState('');
    const { speak } = useSpeechSynthesis();
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        setKeyPressed(event.key);
        speak({ text: event.key });
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [speak]);
  
    return (
      <div className="HomeContainer">
        <h1 className="Title">Press any key</h1>
        <div className="KeyDisplay">
          <p>You pressed:</p>
          <div className="KeyPressed">{keyPressed}</div>
        </div>
      </div>
    );
  }
  