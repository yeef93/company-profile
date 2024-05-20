import { ReactNode } from "react";

interface TitleProps {
  imageUrl?: string;
  children: ReactNode;
}

function BackgroundImage({ children, imageUrl }: TitleProps) {
    const imagePath = "/assets/bgImage/";
  return (
    <div
      className=" lg:h-96 sm:h-60"
      style={{
        backgroundImage: `url(${imagePath}${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
}

export default BackgroundImage;
