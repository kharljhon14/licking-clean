import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Provider } from '@/types/provider';
import Image from 'next/image';
import BookNowButton from '../book-now-button';

interface Props {
  provider: Provider;
}

export default function CleanerCard({ provider }: Props) {
  return (
    <Card className=" rounded-2xl shadow-md overflow-hidden py-0 h-[38rem]">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src={provider.image}
            alt={provider.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl  text-header">{provider.name}</CardTitle>
            <span className="bg-badge text-slate-text text-xs font-semibold px-3 py-1 rounded-full">
              Top-Rated
            </span>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-slate-text mt-1">⭐ {provider.rating.toFixed(1)}</p>

            <p className="mt-3 text-slate-text text-sm">{provider.bio}</p>
          </div>
        </div>

        <div className="w-full">
          <BookNowButton providerId={provider.id} />
        </div>
      </CardContent>
    </Card>
  );
}
