export const CustomContainer = ({ children, className }) => {
  return (
    <div
      className={`w-[90%] m-auto tab:w-[85%] laptop:w-[1260px] laptop:px-10 ${className}`}
    >
      {children}
    </div>
  );
};
