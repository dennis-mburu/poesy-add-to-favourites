import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems, onDeletePoem, onUpdateFavourites}) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map(poem => <Poem key={poem.id} poem={poem} onDeletePoem={onDeletePoem} onUpdateFavourites={onUpdateFavourites}/>)}
    </div>
  );
}

export default PoemsContainer;
