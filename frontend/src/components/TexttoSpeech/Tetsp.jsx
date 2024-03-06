import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./Tetsp.scss"; // Import CSS for styling

function Tetsp() {
  const [text, setText] = useState("");
  const { speak, supported } = useSpeechSynthesis();

  const handleSpeak = () => {
    if (text.trim() !== "") {
      speak({ text });
    }
  };

  return (
    <div className="container">
      <h1>Text to Speech Converter</h1>
      <div className="converter">
        <textarea
          placeholder="Enter text to convert..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {supported && <button onClick={handleSpeak}>Speak</button>}
      </div>
      {!supported && (
        <div className="error-message">
          Text to speech is not supported in your browser.
        </div>
      )}
    </div>
  );
}

export default Tetsp;
