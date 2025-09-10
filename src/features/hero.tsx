import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-12 border-b border-slate-text">
      <div className="flex justify-center flex-col text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-header leading-snug">
          Your Home, Sparkling Clean
          <span className="block">Stress-Free</span>
        </h1>
        <p className="mt-4 md:mt-6 max-w-lg mx-auto md:mx-0 text-slate-text">
          Trusted cleaners near you, ready to make every room shine. Book in minutes, relax for
          hours.
        </p>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <Button size="lg">Book Your Cleaner</Button>
        </div>
      </div>

      <div className="relative w-full h-64 sm:h-80 md:h-[46rem] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/hero-bg.jpg"
          alt="Cleaner smiling while cleaning floor"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
