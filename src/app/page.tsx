import Footer from '@/components/footer';
import Header from '@/components/header';
import Cleaners from '@/features/cleaners/cleaners';
import Hero from '@/features/hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-12 space-y-10 ">
        <Hero />
        <Cleaners />
      </main>
      <Footer />
    </>
  );
}
