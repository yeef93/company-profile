interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <h3 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      {text}
    </h3>
  );
}

export default Title;
