<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/glenrage/block-dex">
    <img src="https://i.imgur.com/NF759ph.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">PokeyDecks</h3>

  <p align="center">
    Small Pokedex project
    <br />
    <br />
    <br />
    <a href="https://glenrage.github.io/block-dex"><strong>View Deployed Version</strong></a>
    </h5>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#technical-decisions">Technical Decisions</a></li>

  </ol>
</details>

### Built With

- [![React][react.js]][react-url]

## Getting Started

You can click on the View Demo link up above or <a href="https://glenrage.github.io/block-dex"><strong>here</strong></a> to view a deployed version.

Otherwise you can download and run it locally

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/glenrage/block-dex.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Run tests
   ```
   npm run test
   ```
4. Run Build
   ```
   npm run start
   ```
5. Open browser to localhost:3000

## Technical Decisions

1. Add Pokemon Feature - Since instructions were to NOT use the Pokedex API, my intuition tells me this feature should allow the user to custom add a new Pokemon that does not exist.
   - I created a reusable form component that utilizes React.Context so that the form may be used globally within the application without any parent-child dependency.
   - I stored the new pokemon data in localstorage, normally we would probably want to persist the data through a database layer, but in our case its temporarily stored on the client side.
   - New Pokemon data is retrieved through Context API. Using Redux would be a bit overkill for this small project, but as our app scales a state management library would be ideal than the Context API.
2. Error Handling - Main application error handling is handled through an Error Handler Wrapper component. Network requests error handling is done via simple try catch blocks.
3. Responsiveness & Styling - Unfortunately did not have enough time to make it mobile pixel perfect. Gallery view does scale down as screen resolution decreases.
4. Testing - I added a few integration & unit tests. I favor integration testing as how components render within pages or other components gives the best return or "bang for buck" for time allotted to writing tests

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/glen-pham-7866a792
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
