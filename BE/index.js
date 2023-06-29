const express = require("express");
const axios = require("axios");
require("dotenv").config();
const app = express();
const cors = require("cors"); // Import the cors package
app.use(cors());
const port = process.env.PORT || 3339;
app.use(express.json());

app.post("/convert", async (req, res) => {
  try {
    const code = req.body.code;
    // const language = req.body.language;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: `Convert the following code:-  ${code} to:\n paython code. \n if the code is incorrect or not complate please make gusses and complate it.`, // changes
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const codes = response.data.choices[0].text.trim();
    res.json({ codes });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
