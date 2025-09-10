'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function BookNowButton({ providerId }: { providerId: number }) {
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    try {
      setLoading(true);

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider_id: providerId })
      });

      const data = await res.json();

      if (data.message) {
        toast.success(data.message, { richColors: true, position: 'top-center' });
      } else {
        toast.error(data.error || 'Something went wrong', {
          richColors: true,
          position: 'top-center'
        });
      }
    } catch (err) {
      toast.error('Network error. Please try again.', { richColors: true, position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleBooking}
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Book Now'}
      </Button>
    </div>
  );
}
