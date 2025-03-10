import classNames from 'classnames';
import { ReactNode } from 'react';

interface GridProps {
  children?: ReactNode;
	className?: string;
}

const Grid = ({ children, className }: GridProps) => {
  return (
    <div className={classNames(
			"flex gap-6 flex-wrap w-auto m-auto justify-stretch *:w-full md:*:w-[calc(50%_-_12px)] xl:*:w-[calc(33.33%_-_16px)] 2xl:*:w-[calc(25%_-_18px)]",
			className
		)}>
      {children}
    </div>
  );
};

export default Grid;
