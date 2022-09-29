import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, keyword, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.title.toUpperCase().includes(keyword) === true)
        .map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))}
    </div>
  );
}

export default NoteList;
