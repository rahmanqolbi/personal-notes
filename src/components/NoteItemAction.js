import React from "react";

function DeleteButton({ onDelete, id }) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}

function ArchiveButton({ onArchive, id }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Arsipkan
    </button>
  );
}

function NoteItemAction({ onDelete, onArchive, id }) {
  return (
    <div className="note-item__action">
      <DeleteButton onDelete={onDelete} id={id} />
      <ArchiveButton onArchive={onArchive} id={id} />
    </div>
  );
}

export default NoteItemAction;
