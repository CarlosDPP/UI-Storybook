
  
import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };

/*

import React from "react";
import "./button.css";

export interface ButtonProps  {
*/
  /**
   * Is this the principal call to action on the page?
   */
  //primary?: boolean;
  /**
   * What background color to use
   */
  //backgroundColor?: string;
  /**
   * How large should the button be?
   */
  //size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  //label: string;
  /**
   * Optional click handler
   */
  /*
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};*/

/**
 * Primary UI component for user interaction
 */
/*
const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  label,
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor }: {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;*/