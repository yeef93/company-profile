interface ButtonProps {
  text: string;
  link: string;
}

function Button({ text, link }: ButtonProps) {
  return (
    <div className="mt-4 md:mt-8">
      <a
        className="group relative inline-block focus:outline-none focus:ring"
        href={link}
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          {text}
        </span>
      </a>
    </div>
  );
}

export default Button;
