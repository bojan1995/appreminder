// src/components/WordList.js
import React from "react";

const WordList = ({ words, onDeleteWord, onReorderWords }) => {
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, toIndex) => {
    const fromIndex = e.dataTransfer.getData("text/plain");
    if (fromIndex !== toIndex) {
      onReorderWords(fromIndex, toIndex);
    }
  };

  return (
    <ul className="todo-list">
      {words.map((word, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          <span className="word">{word.english}</span> -{" "}
          <span className="translation">{word.macedonian}</span>
          <button className="delete-btn" onClick={() => onDeleteWord(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WordList;