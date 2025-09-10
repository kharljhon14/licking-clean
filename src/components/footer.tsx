import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-header text-2xl font-bold">Licking Clean</h2>
          <p className="mt-3 text-slate-text text-sm  max-w-xs">
            Trusted home cleaning services that bring comfort, care, and a sparkling touch to your
            family&apos;s home.
          </p>
        </div>

        <div>
          <h3 className="text-slate-text font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link
                href="/"
                className="hover:text-header transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-header transition"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-header transition"
              >
                Book a Cleaner
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-header transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-slate-text font-semibold mb-3">Get Started</h3>
          <p className="text-sm text-slate-text  mb-4">
            Ready for a sparkling clean home? Book your trusted cleaner today.
          </p>
          <Button size="lg">Book Now</Button>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6">
        <p className="text-center text-xs text-slate-text py-4 ">
          © {new Date().getFullYear()} Licking Clean. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
