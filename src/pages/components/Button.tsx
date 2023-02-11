export default function Button({
  icon,
  children,
  ...props
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      className=" flex flex-row items-center rounded-full bg-blue-500 py-1 px-2 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-blue-700"
      {...props}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
}
