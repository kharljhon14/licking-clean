import Link from 'next/link';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-200 flex items-center justify-between px-6 md:px-10 py-3 text-slate-text">
      <nav className="hidden md:block">
        <ul className="flex gap-x-6  text-sm md:text-base">
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
          <h1 className="text-center uppercase tracking-wider text-2xl md:text-3xl text-header">
            <span className="font-bold">Licking</span>
            <span className="block font-semibold text-lg md:text-xl">Clean</span>
          </h1>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <Button
          size="lg"
          variant="ghost"
        >
          Log In
        </Button>
        <Button size="lg">Book Now</Button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-header text-2xl font-bold">Licking Clean</SheetTitle>
              <SheetDescription className="text-slate-text">
                Sparkling homes, stress-free living. Navigate below to explore our services or book
                your trusted cleaner today.
              </SheetDescription>
            </SheetHeader>

            <nav className=" p-6 flex flex-col gap-6 text-lg ">
              <Link
                href="/"
                className="hover:text-header transition text-md"
              >
                Services
              </Link>
              <Link
                href="/"
                className="hover:text-header transition text-md"
              >
                How It Works
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="justify-start"
              >
                Log In
              </Button>
              <Button
                size="lg"
                className="justify-start"
              >
                Book Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
