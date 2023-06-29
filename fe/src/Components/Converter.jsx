import React from "react";
import "./Converter.css";
export default function Converter() {
  return (
    <div>
      <div class="container">
        <h1>Code Converter</h1>
        <div class="form">
          <textarea
            id="codeInput"
            placeholder="Enter your code here"
          ></textarea>
          <select id="languageSelect">
            <option value="javascript">C++</option>
            <option value="javascript">C#</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="javascript">TypeScript</option>
          </select>
          <div class="buttons">
            <button id="convertButton" onclick="convertCode()">
              Convert
            </button>
            <button id="clearButton" onclick="clearCode()">
              Debug
            </button>
            <button id="copyButton" onclick="copyCode()">
              Check Quality
            </button>
          </div>
        </div>
        <div id="output" class="output">
          <pre id="convertedCode"></pre>
        </div>
      </div>
    </div>
  );
}
