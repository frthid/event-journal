export interface IInputProps {
  id: string;
  value: string;
  type: string;
  name: string;
  placeholder?: string; 
  onChange: (value: string) => void;
}