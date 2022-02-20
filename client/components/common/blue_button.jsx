export const BlueButton = ({ children, ...other }) => {
  return (
    <button
      className="rounded-md bg-[#93c5fd] ring-1 ring-opacity-5 ring-black shadow-lg pt-1 pb-1 pr-2 pl-2"
      {...other}
    >
      {children}
    </button>
  );
};
