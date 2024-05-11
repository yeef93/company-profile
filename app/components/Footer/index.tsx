import React from "react";
import Image from "next/image";
import fb from "@/public/assets/socmed/facebook.png";
import ig from "@/public/assets/socmed/instagram.png";
import tw from "@/public/assets/socmed/twitter.png";
import yt from "@/public/assets/socmed/youtube.png";

function Footer() {
  return (
    <footer className="text-center text-surface/75 bg-tangerine text-white lg:text-left text-xs">
      <div className="flex items-center justify-center border-b-2 px-24 py-2 border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="me-4 hover:opacity-30 ">
            <Image src={fb} alt="fb Logo" width={20} height={20} priority />
          </a>
          <a href="#!" className="me-4 hover:opacity-30">
            <Image src={ig} alt="ig Logo" width={20} height={20} priority />
          </a>
          <a href="#!" className="me-4 hover:opacity-30">
            <Image src={tw} alt="tw Logo" width={20} height={20} priority />
          </a>
          <a href="#!" className="me-4 hover:opacity-30">
            <Image src={yt} alt="yt Logo" width={20} height={20} priority />
          </a>
        </div>
      </div>
      <div className="mx-6 px-20 py-10 text-center md:text-left">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
    <div className="md:col-span-2 lg:col-span-2 lg:pr-12">
      <h6 className="mb-4 flex items-center justify-center md:justify-start font-semibold uppercase border-b-2 border-white">
        Bon Appétit
      </h6>
      <p>
        Bon Appétit is a market leading educator that is revolving around the Cookery and Pastry industry. As a school who dedicates all of the passion in Cookery and Pastry industry, we value our students and we are very student oriented. With the guidance provided by our educators, we will help our students to grow their culinary skills and meanwhile we are trying our best to build their character and creativity as a chef.
      </p>
    </div>
    <div className="md:col-span-1 lg:col-span-1">
      <h6 className="mb-4 flex justify-center md:justify-start font-semibold uppercase">
        About Us
      </h6>
      <p className="mb-4">
        <a href="#!">Angular</a>
      </p>
      <p className="mb-4">
        <a href="#!">React</a>
      </p>
      <p className="mb-4">
        <a href="#!">Vue</a>
      </p>
      <p>
        <a href="#!">Laravel</a>
      </p>
    </div>
    <div className="md:col-span-1 lg:col-span-1">
      <h6 className="mb-4 flex justify-center md:justify-start font-semibold uppercase">
        Course
      </h6>
      <p className="mb-4">
        <a href="#!">Pricing</a>
      </p>
      <p className="mb-4">
        <a href="#!">Settings</a>
      </p>
      <p className="mb-4">
        <a href="#!">Orders</a>
      </p>
      <p>
        <a href="#!">Help</a>
      </p>
    </div>
    <div className="md:col-span-2 lg:col-span-1">
      <h6 className="mb-4 flex justify-center md:justify-start font-semibold uppercase">
        Contact
      </h6>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        Tj. Uma,Kec. Lubuk Baja,Kota Batam, 
        <br/>Kepulauan Riau 29432
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        bonappetit.idn@gmail.com
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        +62 812-6737-2670
      </p>
      <p className="flex items-center justify-center md:justify-start">
        08.00-16.00
      </p>
    </div>
  </div>
</div>


      <div className=" bg-darkTangerine p-6 text-center">
        <a className="font-semibold text-xs">
          made with ❤️ by Yuninda Faranika
        </a>
      </div>
    </footer>
  );
}

export default Footer;
