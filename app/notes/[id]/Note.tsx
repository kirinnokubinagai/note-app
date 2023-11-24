import React from "react";
import { Note } from "../type";
import parse from "html-react-parser";

interface NoteProps {
  note: Note;
}

const Note = ({ note }: NoteProps) => {
  const inputDate = new Date(note.createdAt);
  const outputDateTimeString = inputDate.toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg p-5 gap-2.5">
      <div className="flex items-center justify-between gap-1 mb-3">
        <h3 className="text-pink-500 text-lg md:text-xl font-semibold">
          {note.title}
        </h3>
        <p className="text-sm">{outputDateTimeString}</p>
      </div>
      <span>{parse(note.content)}</span>
    </div>
  );
};

export default Note;
