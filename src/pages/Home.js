import React, { useState } from "react";

import { Link } from "react-router-dom";

function Home() {
  const [selectedLength, setSelectedLength] = useState(5);

  function handleClick(e) {
    setSelectedLength(parseInt(e.target.value, 10));
  }

  return (
    <main className="flex">
      <div className="flex home-text home-text-wrapper">Choose word length</div>
      <div className="flex choose-length-wrapper">
        {Array.from({ length: 6 }, (_, index) => {
          let wordLength = index + 3;
          return (
            <button
              className={`button number-selector ${
                wordLength === selectedLength && "selected"
              } `}
              value={wordLength}
              onClick={handleClick}
              key={index}
            >
              {wordLength}
            </button>
          );
        })}
      </div>
      <div className="flex play-wrapper">
        <Link
          className="button play"
          role="button"
          to={`/random/${selectedLength}`}
        >
          Play
        </Link>
      </div>
    </main>
  );
}
export default Home;
