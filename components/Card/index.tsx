import { ReactNode } from "react";

interface CardProps{
    className?: string;
    children: ReactNode;
}

function Card({children,className}:CardProps){
    return(
        <div className={`bg-gray-400 py-14 px-12 shadow-md rounded-bl-3xl hover:bg-tangerine ${className}`}>
            {children}
        </div>
    )
}

export default Card;