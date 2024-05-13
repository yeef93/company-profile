interface DividerProps {
  text: string;
}
function Divider({ text }: DividerProps) {
  return (
    <div className=" w-full sm:grid sm:grid-cols-auto sm:items-center">
        <h1 className=" text-3xl font-semibold">{text}</h1>
      <span className="h-px bg-black"></span>
    </div>
  );
}

export default Divider;
