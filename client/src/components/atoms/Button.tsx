import React from "react";
import clsx from "clsx";
import type { IconType } from "react-icons/lib";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
}

const Button: React.FC<React.PropsWithChildren<Props>> = props => {
  const { children, className, icon: Icon, ...rest } = props;

  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-1.5 rounded font-medium transition-all duration-150",
        className
      )}
      {...rest}
    >
      {Icon && <Icon size="1.5em" />}
      {children}
    </button>
  );
};

export default Button;
