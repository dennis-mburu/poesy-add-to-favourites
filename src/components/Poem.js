import React, { useState } from "react";

function Poem({ poem, onDeletePoem, onUpdateFavourites }) {
  const [read, setRead] = useState(false);
  const { id, title, content, author } = poem;

  const [isFavourite, setIsFavourite] = useState(false);

  function handlePoemDelete() {
    fetch(`http://localhost:8004/poems/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        onDeletePoem(id);
      });
  }

  function handleFavouriteClick(){
    onUpdateFavourites(id)
    setIsFavourite(!isFavourite)
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <div className="buttons-container">
        <button onClick={() => setRead(!read)}>
          Mark as {read ? "unread" : "read"}
        </button>
        <button onClick={handleFavouriteClick}>{isFavourite ? "Remove From" : "Add to" } Favourites</button>
        <button onClick={handlePoemDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Poem;
