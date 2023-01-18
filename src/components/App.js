import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favourites from "./Favourites";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [poems, setPoems] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((r) => r.json())
      .then((data) => setPoems(data));
  }, []);

  function handleAddPoem(newPoem) {
    setPoems([...poems, newPoem]);
  }

  function handleDeletePoem(id) {
    setPoems(poems.filter((poem) => poem.id !== id));
  }

  // function handleUpdateFavourites(id) {
  //    favourites.forEach((poem) => {
  //     if (poem.id === id) {
  //       setFavourites(favourites.filter((poem) => poem.id !== id));
  //       console.log(favourites);
  //     } else {
  //       setFavourites([...favourites, poems.find((poem) => poem.id === id)]);
  //       console.log(favourites)
  //     }
  //   });
  // }

  function handleUpdateFavourites(id) {
    const result = favourites.find((poem) => poem.id === id);
    if (result) {
      setFavourites(favourites.filter((poem) => poem.id !== id));
    } else {
      setFavourites([...favourites, poems.find((poem) => poem.id === id)]);
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setShowForm((disp) => !disp)}>
          Show/hide new poem form
        </button>
        {showForm ? <NewPoemForm onAddPoem={handleAddPoem} /> : null}
        <Favourites favourites={favourites} />
      </div>
      <PoemsContainer
        poems={poems}
        onDeletePoem={handleDeletePoem}
        onUpdateFavourites={handleUpdateFavourites}
      />
    </div>
  );
}

export default App;
