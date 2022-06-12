import React from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

type Props = {
  active?: boolean;
  bordered?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    bordered,
    disabled,
    onClick,
    className,
  } = props;

  return (
    <button
      className={clsx({
        [classes.component]: true,
        [classes.bordered]: bordered,
        [classes.disabled]: disabled,
        [`${className}`]: !!className,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
