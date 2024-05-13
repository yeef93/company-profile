import Card from "@/components/Card";
import Image from "next/image";
import Hero from "./components/Hero";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <CTA />
      {/* <Hero /> */}
      <div className=" flex flex-row gap-5">
        <Card>
          <Image
            className="relative"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Card>
        <Card className=" hover:bg-tangerine">
          <Image
            className="relative "
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Card>
        <Card className=" hover:bg-tangerine">
          <Image
            className="relative"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Card>
        <Card className=" hover:bg-tangerine">
          <Image
            className="relative"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Card>
      </div>
    </>
  );
}
