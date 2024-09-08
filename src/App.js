import React from "react";
import "./App.css"; // Custom CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Blog Title</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <h2>Eye Disease Detection</h2>
          <p>
            Welcome to the Pixel Pals Blog! This is a sample post to demonstrate
            the Problem at hand, Objectives, Solution, and Short Comings of this
            Project.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris.
          </p>
        </article>
      </main>

      <footer>
        <p>© 2024 PixelPals</p>
      </footer>
    </div>
  );
}

export default App;
