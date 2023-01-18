import React, { useState } from "react";

function Poem({poem, onDeletePoem}) {

  const [read, setRead] = useState(false) 

  const {id, title, content, author} = poem

  function handlePoemDelete(){
    fetch(`http://localhost:8004/poems/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(data => {
      onDeletePoem(id)
    })
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={()=> setRead(!read)}>Mark as {read ? "unread" : "read"}</button>
      <button style={{float: "right"}} onClick={handlePoemDelete}>Delete</button>
    </div>
  );
}

export default Poem;
