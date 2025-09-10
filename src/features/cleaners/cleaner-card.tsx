import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function CleanerCard() {
  return (
    <Card className=" rounded-2xl shadow-md overflow-hidden py-0">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src="/images/hero-bg.jpg"
            alt="Cleaner smiling"
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-poppins text-header">Maria Santos</CardTitle>
          <span className="bg-badge text-slate-text text-xs font-semibold px-3 py-1 rounded-full">
            Top-Rated
          </span>
        </div>

        <p className="text-sm text-slate-text mt-1">⭐ 4.9 (120 reviews)</p>

        <p className="mt-3 text-slate-text text-sm font-lato">
          Friendly, reliable cleaner with 5+ years of experience. Specializes in deep cleaning and
          making homes sparkle stress-free.
        </p>

        <Button
          className="mt-6 w-full"
          size="lg"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}
