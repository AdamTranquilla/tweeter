import React from "react";
import './Profile.css' 

export const Profile = () => {
  return (
    <aside className="backdrop">
      <div>
        <img src="/profile-hex.png" />
      </div>
      <br />
      <div>
        <h2>Randomized User</h2>
      </div>
    </aside>
  );
};
