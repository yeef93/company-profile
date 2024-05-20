import Accordion from "@/components/Accoordion";
import TwoContent from "@/components/TwoContent";
import faqdata from "@/utils/faq";

function Faq() {
  return (
    <section className="w-full">
      <TwoContent title="Frequently Asked Questions">
        <div className="mx-auto grid max-w-xl divide-y divide-neutral-200">
        {faqdata.map((item) => {
            return (
          <Accordion  key={item.id} answer={item.question} question={item.answer} />);
        })}
        </div>
      </TwoContent>
    </section>
  );
}

export default Faq;
