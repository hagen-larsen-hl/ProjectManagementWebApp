export const ButtonBig = ({ children, ...other }) => {
  return (
    <button
      className="rounded-md bg-[#f1f5f9] ring-1 ring-opacity-5 ring-black shadow-lg pt-2 pb-2 pr-4 pl-4 font-bold"
      {...other}
    >
      {children}
    </button>
  );
};
