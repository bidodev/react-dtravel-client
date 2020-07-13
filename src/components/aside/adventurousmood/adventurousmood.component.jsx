import React from "react";
import "./adventurousmood.component.scss";

function AdventurousMood() {
  return (
    <div className="aside-adventurous__mood">
      <h3>Adventurous Mood</h3>
      <div className="aside-adventurous__mood-icons">
        <ion-icon name="boat"></ion-icon>
        <ion-icon name="airplane"></ion-icon>
        <ion-icon name="car"></ion-icon>
        <ion-icon name="caret-up"></ion-icon>
        <ion-icon name="bicycle"></ion-icon>
      </div>
    </div>
  );
}

export default AdventurousMood;
