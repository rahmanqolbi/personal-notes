import React from "react";

function NoteSearch({ keyword, onSearch }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan ..." value={keyword} onChange={onSearch} />
    </div>
  );
}

export default NoteSearch;
