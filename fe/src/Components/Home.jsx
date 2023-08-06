import React from "react";
import "./Home.css";
import { Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <div id="main">
      <div class="container">
        <div class="left-section">
          <div class="header">Code Refine Pro</div>
          <div class="text-lines">
            Explore our Code Conversion Hub. Seamlessly convert code between
            languages, precise debugging, and thorough code quality assessment.
            Elevate your coding experience with versatile tools, all in one
            place.
          </div>
          <Link href="#converter_ui">
            <button class="button">Get Started</button>
          </Link>
        </div>
        <div class="right-section">
          <img
            class="image"
            src="https://i.pinimg.com/750x/38/d4/54/38d454f74e873c8990f5e31e830a19d7.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}
