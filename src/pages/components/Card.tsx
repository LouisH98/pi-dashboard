import clsx from "clsx";

export default function Card({
  isLink,
  children,
  ...props
}: {
  isLink?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement>) {
  return (
    <a
      href={isLink ? "#" : undefined}
      className={clsx(
        isLink && "hover:scale-105",
        "block rounded-lg border border-neutral-200 bg-white p-2 shadow transition-all duration-200 hover:bg-neutral-100  dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 "
      )}
      {...props}
    >
      {children}
    </a>
  );
}
