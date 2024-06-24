import { useId } from "react";
import styles from "../styles/Textarea.module.css";

type TextareaProps = {
  label: string;
  name: string;
  rows: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

function Textarea({ label, name, rows, value, onChange }: TextareaProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={styles.textarea}
        name={name}
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export { Textarea };
