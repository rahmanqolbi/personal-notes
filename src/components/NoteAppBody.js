import React from "react";
import NoteGroup from "./NoteGroup";
import NoteInput from "./NoteInput";

function NoteAppBody({ notes, archivedNotes, keyword, onDelete, onArchive, onAddNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={onAddNote} />
      <NoteGroup groupTitle="Catatan Aktif" notes={notes} onDelete={onDelete} onArchive={onArchive} keyword={keyword} />
      <NoteGroup groupTitle="Archive" notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} keyword={keyword} />
    </div>
  );
}

export default NoteAppBody;
