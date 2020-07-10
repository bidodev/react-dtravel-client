import React from 'react';
import {Link} from "react-router-dom";

export const MainTitle = () => {
  return (
    <div className="main-title">
        {/* LOGO */}
        <div className="logo">
        <p> do the travel.</p>
      </div>
      {/* Content part */}
      <div className="content">
        <h1>Get ready for your lifetime journey!</h1>
        <h5>
          Collection of the most beautiful places, experiences and unusual
          housing in the world
        </h5>
        <Link to="/quiz">
        <button type="button" class="btn btn-primary btn-lg">
          Start the Quiz
        </button>
        </Link>
        <ion-icon name="chevron-back-outline"></ion-icon>
        <p>Get inspired</p>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  );
}


