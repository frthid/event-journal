export interface IToggleProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  color?: 'delete';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}