'use client';
import { useEffect, useState } from 'react';
import CleanersCarousel from './cleaners-carousel';
import { Provider } from '@/types/provider';
import { Skeleton } from '@/components/ui/skeleton';

export default function Cleaners() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await fetch('/api/providers');
        const data = await res.json();
        setProviders(data);
      } catch (error) {
        console.error('Failed to fetch providers', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-header text-3xl md:text-4xl font-bold">
          Reliable Home Cleaners You Can Trust
        </h2>

        <p className="mt-4 text-slate-text max-w-2xl mx-auto text-base md:text-lg">
          From one-time deep cleans to weekly upkeep, our trusted professionals are ready to keep
          your home sparkling. Browse top-rated cleaners near you and book with confidence.
        </p>
      </div>

      <div className="mt-12">
        {loading ? (
          <div className="flex gap-6 overflow-x-auto">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-80 shrink-0 rounded-xl border p-4 shadow-sm"
              >
                <Skeleton className="h-40 w-full rounded-lg" />
                <div className="mt-4 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-40 w-full rounded-lg" />
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CleanersCarousel providers={providers} />
        )}
      </div>
    </section>
  );
}
