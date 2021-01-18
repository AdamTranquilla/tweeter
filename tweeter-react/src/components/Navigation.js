import React from "react";
import './Navigation.css'

export const Navigation = () => {
  return (
    <nav>
      <span>tweeter</span>
      <div>
        <p>Write a new tweet</p>
        <button type="submit">
          <i className="fas fa-angle-double-down"></i>
        </button>
      </div>
    </nav>
  );
};
