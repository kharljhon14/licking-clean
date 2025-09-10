import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-3 shadow-sm text-slate-text">
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">How It Works</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Link href="/">
          <h1 className="text-center uppercase tracking-wider text-3xl text-black">
            <span className="font-bold ">Licking</span>
            <span className="block font-semibold text-xl">Clean</span>
          </h1>
        </Link>
      </div>

      <div>CTA</div>
    </header>
  );
}
