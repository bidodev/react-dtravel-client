import React from "react";

const Intro = () => {
  return (
    <div className="intro">
        {/* LOGO */}
      <div className="logo">
        <p> do the travel.</p>
      </div>
{/* Content part */}
      <div className="content">
          <h1>Get ready for your lifetime journey!</h1>
          <h5>
            Collection of the most beautiful places, experiences and unusual
            housing in the world.
          </h5>
          <button type="button" class="btn btn-primary btn-lg">
            Get started
          </button>
      </div>
{/* Page change */}
      <div className="pages">

      <ion-icon name="chevron-back-outline"></ion-icon>
      <p>Get inspired</p>
      <ion-icon name="chevron-forward-outline"></ion-icon>

      </div>
    </div>
  );
};
export default Intro;
