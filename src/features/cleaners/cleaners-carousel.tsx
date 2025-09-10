import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import CleanerCard from './cleaner-card';
import { Provider } from '@/types/provider';

interface Props {
  providers: Provider[];
}

export default function CleanersCarousel({ providers }: Props) {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start'
      }}
    >
      <CarouselContent>
        {providers.map((provider) => (
          <CarouselItem
            key={provider.id}
            className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <CleanerCard provider={provider} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
