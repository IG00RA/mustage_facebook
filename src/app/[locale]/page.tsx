import Opportunities from '@/components/Opportunities/Opportunities';
import Answers from '@/components/Ansvers/Answers';
import Feedback from '@/components/Feedback/Feedback';
import Form from '@/components/Form/Form';
import Hero from '@/components/Hero/Hero';
import Program from '@/components/Program/Program';
import Study from '@/components/Study/Study';
import Result from '@/components/Result/Result';
import Consumables from '@/components/Consumables/Consumables';

export default function Home() {
  return (
    <>
      <Hero />
      <Opportunities />
      <Result />
      <Consumables />
      <></>
      <Study />
      <Program />
      <Feedback />
      <Answers />
      <Form />
    </>
  );
}
