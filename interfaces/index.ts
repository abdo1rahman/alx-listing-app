export interface CardProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}