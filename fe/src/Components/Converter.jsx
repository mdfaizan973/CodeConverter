import React, { useState } from "react";
import "./Converter.css";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Heading,
  Textarea,
  Select,
  Divider,
  VStack,
  CircularProgress,
  chakra,
} from "@chakra-ui/react";
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
    <div id="converter_ui">
      <div id="main_container">
        <Container maxW="lg" py={10}>
          <VStack spacing={6} align="center">
            <Heading size="xl">PUT YOUR CODE</Heading>
            <Box w="full">
              <Textarea
                value={textarea}
                onChange={(e) => setTextArea(e.target.value)}
                placeholder="Enter your code here"
                size="md"
              />
            </Box>
            <Select
              value={language}
              onChange={(e) => setlanguage(e.target.value)}
              placeholder="Select a language"
              size="md"
            >
              <option value="c++">C++</option>
              <option value="c#">C#</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="rust">Rust</option>
              <option value="php">Php</option>
              <option value="ruby">Ruby</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
            </Select>
            <VStack spacing={4}>
              <Button colorScheme="blue" onClick={handleconvert}>
                Convert
              </Button>
              <Button colorScheme="red" onClick={handledebug}>
                Debug
              </Button>
              <Button colorScheme="green" onClick={handlecheckqty}>
                Check Quality
              </Button>
            </VStack>
            <Divider />
            <Box w="full">
              <Box p={4} border="1px solid gray" borderRadius="md">
                {loading ? (
                  <CircularProgress isIndeterminate color="blue.500" />
                ) : (
                  <chakra.h4 whiteSpace="pre-line" fontSize="md">
                    {data}
                  </chakra.h4>
                )}
              </Box>
            </Box>
          </VStack>
        </Container>
      </div>
    </div>
  );
}
// <div>
//   <div className="container">
//     <h1>Code Converter</h1>
//     <div className="form">
//       <textarea
//         onChange={(e) => setTextArea(e.target.value)}
//         id="codeInput"
//         placeholder="Enter your code here"
//       ></textarea>
//       <select
//         id="languageSelect"
//         onChange={(e) => setlanguage(e.target.value)}
//       >
//         <option value="c++">C++</option>
//         <option value="c#">C#</option>
//         <option value="java">Java</option>
//         <option value="python">Python</option>
//         <option value="javascript">JavaScript</option>
//         <option value="typescript">TypeScript</option>
//       </select>
//       <div className="buttons">
//         <button id="convertButton" onClick={handleconvert}>
//           Convert
//         </button>
//         <button id="clearButton" onClick={handledebug}>
//           Debug
//         </button>
//         <button id="copyButton" onClick={handlecheckqty}>
//           {" "}
//           Check Quality
//         </button>
//       </div>
//     </div>
//     <div id="output" className="output">
//       {loading ? <h3>Loading.....</h3> : <h4 id="convertedCode">{data}</h4>}
//     </div>
//   </div>
// </div>
