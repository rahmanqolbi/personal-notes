import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, createdAt, body, archived, id, onArchive, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction onDelete={onDelete} id={id} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
