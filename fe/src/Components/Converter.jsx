import React, { useState } from "react";
import "./Converter.css";
import axios from "axios";
export default function Converter() {
  const [textarea, setTextArea] = useState("");
  const [language, setlanguage] = useState("");
  const [data, setData] = useState("");
  const [loading, setloading] = useState(false);
  const handleconvert = () => {
    let obj = {
      textarea,
      language,
    };
    setloading(true);

    fetch(`https://thoughtful-ox-train.cyclic.app/convertcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: textarea, language: language }),
    })
      .then((response) => response.json())
      .then((data) => {
        setloading(false);
        console.log(data.codes);
        setData(data.codes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handledebug = () => {
    setloading(true);

    fetch(`https://thoughtful-ox-train.cyclic.app/debugcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: textarea, language: language }),
    })
      .then((response) => response.json())
      .then((data) => {
        setloading(false);
        console.log(data);
        setData(data.response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlecheckqty = () => {
    setloading(true);

    fetch(`https://thoughtful-ox-train.cyclic.app/checkquality`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: textarea, language: language }),
    })
      .then((response) => response.json())
      .then((data) => {
        setloading(false);
        console.log(data);
        setData(data.response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Code Converter</h1>
        <div className="form">
          <textarea
            onChange={(e) => setTextArea(e.target.value)}
            id="codeInput"
            placeholder="Enter your code here"
          ></textarea>
          <select
            id="languageSelect"
            onChange={(e) => setlanguage(e.target.value)}
          >
            <option value="c++">C++</option>
            <option value="c#">C#</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
          </select>
          <div className="buttons">
            <button id="convertButton" onClick={handleconvert}>
              Convert
            </button>
            <button id="clearButton" onClick={handledebug}>
              Debug
            </button>
            <button id="copyButton" onClick={handlecheckqty}>
              {" "}
              Check Quality
            </button>
          </div>
        </div>
        <div id="output" className="output">
          {loading ? <h3>Loading.....</h3> : <h4 id="convertedCode">{data}</h4>}
        </div>
      </div>
    </div>
  );
}
