import classNames from "classnames";
import { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?:
    | "vanilla"
    | "peach"
    | "melon"
    | "lavender-pink"
    | "lilac"
    | "cornflower"
    | "sky"
    | "turquoise"
    | "mint"
    | "light-green";
  label?: ReactNode;
  className?: string;
};

const Input = ({ color = "vanilla", label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-medium">{label}</label>}
      <input
        className={classNames(
          "p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_black] focus:outline-none focus:ring-2 focus:ring-black",
          {
            "bg-[var(--vanilla)]": color === "vanilla",
            "bg-[var(--peach)]": color === "peach",
            "bg-[var(--melon)]": color === "melon",
            "bg-[var(--lavender-pink)]": color === "lavender-pink",
            "bg-[var(--lilac)]": color === "lilac",
            "bg-[var(--cornflower)]": color === "cornflower",
            "bg-[var(--sky)]": color === "sky",
            "bg-[var(--turquoise)]": color === "turquoise",
            "bg-[var(--mint)]": color === "mint",
            "bg-[var(--light-green)]": color === "light-green",
          },
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
