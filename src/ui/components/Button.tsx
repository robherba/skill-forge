import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, LinkProps } from "react-router-dom";

interface DefaultProps {
  children?: ReactNode;
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
  disabled?: boolean;
  className?: string;
}

type ButtonType =
  | (DefaultProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (DefaultProps & LinkProps & { as: "link" });

const Button = ({
  color = "vanilla",
  disabled,
  className,
  children,
  as = "button",
  ...props
}: ButtonType) => {
  const classes = classNames(
    "flex items-center p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_black] hover:shadow-[1px_1px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer",
    {
      "bg-[var(--vanilla)]": color === "vanilla" && !disabled,
      "bg-[var(--peach)]": color === "peach" && !disabled,
      "bg-[var(--melon)]": color === "melon" && !disabled,
      "bg-[var(--lavender-pink)]": color === "lavender-pink" && !disabled,
      "bg-[var(--lilac)]": color === "lilac" && !disabled,
      "bg-[var(--cornflower)]": color === "cornflower" && !disabled,
      "bg-[var(--sky)]": color === "sky" && !disabled,
      "bg-[var(--turquoise)]": color === "turquoise" && !disabled,
      "bg-[var(--mint)]": color === "mint" && !disabled,
      "bg-[var(--light-green)]": color === "light-green" && !disabled,
    },
    className
  );

  if (as === "link") {
    const { to, replace, state, relative, ...linkProps } = props as LinkProps;

    return (
      <Link
        to={to}
        replace={replace}
        state={state}
        relative={relative}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
