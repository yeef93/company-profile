import { ReactNode } from "react";

interface TwoContentProps {
  title: string;
  children: ReactNode;
}

function TwoContent({ title, children }: TwoContentProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-32 flex items-center justify-center">
        <h1 className=" lg:text-4xl md:text-lg capitalize">{title}</h1>
      </div>
      <div className="h-32 lg:col-span-2 border-l-2 px-2">
        {children}
      </div>
    </div>
  );
}

export default TwoContent;
