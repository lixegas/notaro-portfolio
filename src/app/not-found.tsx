import Link from "next/link";

export default function NotFound() {
    return (
      <div className="relative isolate overflow-hidden min-h-svh flex flex-col items-center justify-center text-center p-4">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="aurora w-[36rem] h-[36rem] bg-yellow-400 -top-40 left-1/2 -translate-x-1/2"/>
          <div className="absolute inset-0 bg-grid"/>
        </div>
        <h1 className="font-display text-[10rem] sm:text-[14rem] font-bold tracking-tighter leading-none text-gradient">404</h1>
        <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">La pagina che stai cercando non esiste.</p>
        <Link
          href="/"
          className="rounded-full px-6 py-3 font-medium text-black bg-gradient-to-r from-yellow-300 to-orange-400 hover:brightness-110 duration-300"
        >
          Torna alla home
        </Link>
      </div>
    );
  }
