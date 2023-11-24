import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center collmu justify-center mt-40">
      <div>
        <h3 className="font-medium text-5xl">Hello There. This is Note App</h3>
      </div>
      <div className="mt-10 justify-center flex gap-6">
        <Link
          href="/notes"
          className="bg-blue-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-blue-700"
        >
          Note List
        </Link>
      </div>
    </main>
  );
}
