interface InputProps {
  type: string;
  label?: string;
  name: string;
  required?: boolean;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
