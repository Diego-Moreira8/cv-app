import { useId } from "react";
import styles from "../styles/Input.module.css";

type InputProps = {
  label: string;
  type: "text" | "email" | "url";
  name: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  const id = useId();
  return (
    <div className={styles.formRow}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export { Input };
