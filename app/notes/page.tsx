import { getNotesList } from "@/lib/client";
import Link from "next/link";
import { Note } from "./type";
import parse from "html-react-parser";
import { ReactElement } from "react";

interface NoteProps {
  note: Note;
}

export default async function Page() {
  const noteLists = await getNotesList();

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10 mt-10">
      {noteLists.contents.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

const NoteItem = ({ note }: NoteProps) => {
  const parsedContent: ReactElement[] = parse(note.content) as ReactElement[];

  const contentArray = Array.isArray(parsedContent)
    ? parsedContent
    : [parsedContent];

  const contentAsString = contentArray
    .map((element) => {
      if (
        typeof element === "object" &&
        element.props &&
        element.props.children
      ) {
        return element.props.children;
      }
      return element;
    })
    .join("");

  const inputDate = new Date(note.createdAt);
  const outputDateTimeString = inputDate.toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="bg-gray-100 rounded-lg p-5">
      <Link href={`/notes/${note.id}`}>
        <div className="flex items-center justify-start gap-1 mb-3">
          <h4 className="text-purple-500 hover:text-purple-700 text-lg md:text-xl font-semibold ">
            {note.title}
          </h4>
          <p className="text-sm">{outputDateTimeString}</p>
        </div>
        <p>{contentAsString.slice(0, 10) + "..."}</p>
      </Link>
    </div>
  );
};
