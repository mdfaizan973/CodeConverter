// const express = require("express");
// const axios = require("axios");
// require("dotenv").config();
// const app = express();
// const cors = require("cors"); // Import the cors package
// app.use(cors());
// const port = process.env.PORT || 3333;

// app.use(express.json());

// app.post("/converterri", async (req, res) => {
//   try {
//     const code = req.body.code;
//     const language = req.body.language;
//     const response = await axios.post(
//       "https://api.openai.com/v1/engines/davinci/completions",
//       {
//         prompt: `Convert the following ${code} to ${language}`,
//         max_tokens: 100,
//         temperature: 0.7,
//         n: 1,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const shayari = response.data.choices[0].text.trim();
//     res.json({ shayari });
//   } catch (error) {
//     console.error("Error:", error.response.data);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();
const port = 8888;
const cors = require("cors"); // Import the cors package
app.use(cors());
app.use(express.json());

const { Configuration, OpenAIApi } = require("openai");

async function generateCompletion(data) {
  try {
    const prompt = data;
    const maxTokens = 500;
    const n = 1;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: maxTokens,
      n: n,
    });

    const { choices } = response.data;
    if (choices && choices.length > 0) {
      const completion = choices[0].text.trim();
      return completion;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

app.post("/convertcode", async (req, res) => {
  try {
    const { code, language } = req.body;

    let codes = await generateCompletion(
      `Convert this code:-  ${code} into:\n${language} .`
    );
    res.json({ codes });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
app.post("/debugcode", async (req, res) => {
  try {
    const { code } = req.body;

    let response = await generateCompletion(
      `Debug the following code:-  ${code} \n please check if there is any error and also correct it. also if it's correct provide steps what code is doing and how we can improve it`
    );
    res.json({ response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
app.post("/checkquality", async (req, res) => {
  try {
    const { code } = req.body;

    let response = await generateCompletion(
      `Check the quality of the following code:-  ${code} \n please provide detailed info and also provide some tips to improve. provide in points`
    );
    res.json({ response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
