import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import CleanerCard from './cleaner-card';
export default function CleanersCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start'
      }}
    >
      <CarouselContent>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          <div className="p-1">
            <CleanerCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          <div className="p-1">
            <CleanerCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          <div className="p-1">
            <CleanerCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          <div className="p-1">
            <CleanerCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          <div className="p-1">
            <CleanerCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
          <div className="p-1">
            <CleanerCard />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
