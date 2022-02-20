export const BlueButtonBig = ({ children, ...other }) => {
  return (
    <button
      className="rounded-md bg-[#93c5fd] ring-1 ring-opacity-5 ring-black shadow-lg pt-3 pb-3 pr-4 pl-4 font-bold"
      {...other}
    >
      {children}
    </button>
  );
};
