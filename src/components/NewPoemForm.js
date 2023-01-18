import React, { useState } from "react";

function NewPoemForm({ onAddPoem }) {
  const [poemData, setPoemData] = useState({
    title: "",
    author: "",
    content: "",
  });

  function handlePoemSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poemData),
    })
      .then((r) => r.json())
      .then((data) => onAddPoem(data));
    setPoemData({
      title: "",
      author: "",
      content: "",
    });
  }

  function handleChange(e) {
    setPoemData({ ...poemData, [e.target.name]: e.target.value });
  }

  return (
    <form className="new-poem-form" onSubmit={handlePoemSubmit}>
      <input
        placeholder="Title"
        value={poemData.title}
        name="title"
        onChange={handleChange}
      />
      <input
        placeholder="Author"
        value={poemData.author}
        name="author"
        onChange={handleChange}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        rows={10}
        name="content"
        value={poemData.content}
        onChange={handleChange}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
