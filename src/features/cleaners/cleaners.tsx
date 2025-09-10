import CleanerCard from './cleaner-card';
import CleanersCarousel from './cleaners-carousel';

export default function Cleaners() {
  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-header text-3xl md:text-4xl font-bold font-poppins">
          Reliable Home Cleaners You Can Trust
        </h2>

        <p className="mt-4 text-slate-text max-w-2xl mx-auto font-lato text-base md:text-lg">
          From one-time deep cleans to weekly upkeep, our trusted professionals are ready to keep
          your home sparkling. Browse top-rated cleaners near you and book with confidence.
        </p>
      </div>

      <div className="mt-12">
        <CleanersCarousel />
      </div>
    </section>
  );
}
