import React from "react";
import NoteList from "./NoteList";

function NoteGroup({ notes, groupTitle, keyword, onDelete, onArchive }) {
  return (
    <>
      <h2>{groupTitle}</h2>
      {notes.length !== 0 ? (
        <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} keyword={keyword} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default NoteGroup;
