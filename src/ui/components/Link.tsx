import classNames from "classnames";
import { ReactNode } from 'react';

type DefaultProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
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
  className?: string;
  external?: boolean;
};

const Link = ({children, className, external = false, ...props}: DefaultProps) => {

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.utils.openExternalLink(event.currentTarget.href);
  };

  return (
    <a
      className={classNames('ml-2 underline', className)}
      {...(external && { onClick: handleLinkClick })}
      {...props}
    >
      { children }
    </a>
  );
};

export default Link;
