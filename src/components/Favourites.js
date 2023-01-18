import React from "react";

function Favourites({favourites}) {

  return (
    <div className="fav-container">
      <h3>Favourites</h3>
      {favourites.map(poem => <div key={poem.id}>
        <h4>{poem.title}</h4>
      </div>)}
    </div>
  );
}

export default Favourites;
