export type ButtonType = 'primary' | 'inverted';
export type ButtonIcon = 'default' | 'none';

export interface ButtonProps {
  type?: ButtonType;
  icon?: ButtonIcon;
  text?: string;
  url?: string;
  onClick?: () => void;
  className?: string;
}
