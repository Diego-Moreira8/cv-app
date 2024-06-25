import { useId } from "react";
import styles from "../styles/Checkbox.module.css";

type CheckboxProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ label, name, checked, onChange }: CheckboxProps) {
  const id = useId();

  return (
    <div className={styles.checkboxRow}>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export { Checkbox };
