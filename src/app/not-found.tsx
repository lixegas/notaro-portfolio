import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">404</h1>
        <p className="text-lg mb-6">La pagina che stai cercando non esiste.</p>
        <Link
          href="/"
          className="text-blue-500! hover:underline"
        >
          Torna alla home
        </Link>
      </div>
    );
  }
