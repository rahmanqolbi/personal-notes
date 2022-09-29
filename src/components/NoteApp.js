import React, { Component } from "react";
import { getInitialData } from "../utils";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";
export class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
  }
  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState(() => ({ notes: notes }));
  }
  onAddNoteEventHandler({ title, body }) {
    this.setState((prevNotes) => ({
      notes: [
        ...prevNotes.notes,
        {
          id: +new Date(),
          title: title,
          body: body,
          archived: false,
          createdAt: +new Date(),
        },
      ],
    }));
  }
  onArchiveEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id === id);
    const noteItem = notes[0];
    noteItem.archived = !noteItem.archived;
    this.setState(() => ({ noteItem }));
  }
  onSearchEventHandler(event) {
    this.setState(() => ({
      keyword: event.target.value,
    }));
  }
  render() {
    const notes = this.state.notes.filter((note) => note.archived === false);
    const archivedNotes = this.state.notes.filter((note) => note.archived === true);

    return (
      <>
        <NoteAppHeader onSearch={this.onSearchEventHandler} keyword={this.state.keyword} />
        <NoteAppBody
          notes={notes}
          archivedNotes={archivedNotes}
          onDelete={this.onDeleteEventHandler}
          onAddNote={this.onAddNoteEventHandler}
          onArchive={this.onArchiveEventHandler}
          keyword={this.state.keyword.toUpperCase()}
        />
      </>
    );
  }
}

export default NoteApp;
