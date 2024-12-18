import Opportunities from '@/components/Opportunities/Opportunities';
import Answers from '@/components/Ansvers/Answers';
import Feedback from '@/components/Feedback/Feedback';
import Form from '@/components/Form/Form';
import Hero from '@/components/Hero/Hero';
import Program from '@/components/Program/Program';
import Study from '@/components/Study/Study';
import Result from '@/components/Result/Result';
import Consumables from '@/components/Consumables/Consumables';
import Team from '@/components/Team/Team';
import Footer from '@/components/Footer/Footer';
import Tariffs from '@/components/Tariffs/Tariffs';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Opportunities />
        <Result />
        <Consumables />
        <Team />
        <Study />
        <Program />
        <Tariffs />
        <Feedback />
        <Answers />
        <Form />
      </main>
      <Footer />
    </>
  );
}
