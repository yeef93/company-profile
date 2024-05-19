import { ReactNode } from "react";

interface TwoContentProps {
  title: string;
  children: ReactNode;
}

function TwoContent({ title, children }: TwoContentProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-10 sm:px-4 mb-6">
      <div className="h-32 flex items-start  justify-start pl-20">
        <h1 className=" lg:text-4xl md:text-lg sm:text-2xl capitalize">
          {title}
        </h1>
      </div>
      <div
        className="lg:col-span-2 border-l-2 lg:pl-10 lg:pr-56 sm:p-2
      "
      >
        {children}
      </div>
    </div>
  );
}

export default TwoContent;
