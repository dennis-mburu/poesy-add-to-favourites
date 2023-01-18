import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((r) => r.json())
      .then((data) => setPoems(data));
  }, []);

  function handleAddPoem(newPoem){
    setPoems([...poems, newPoem])
  }

  function handleDeletePoem(id){
    setPoems(poems.filter(poem => poem.id !== id))
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setShowForm((disp) => !disp)}>
          Show/hide new poem form
        </button>
        {showForm ? <NewPoemForm onAddPoem={handleAddPoem}/> : null}
      </div>
      <PoemsContainer poems={poems} onDeletePoem={handleDeletePoem}/>
    </div>
  );
}

export default App;
