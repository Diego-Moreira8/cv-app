import { useEffect, useRef } from "react";
import styles from "../styles/Modal.module.css";

type ModalProps = {
  text: string;
  onResolve: (value: boolean) => void;
};

function Modal({ text, onResolve }: ModalProps) {
  const falseBtnRef = useRef<HTMLButtonElement>(null);
  const trueBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleTab(e: KeyboardEvent) {
      // Cycle focus inside the modal
      const buttons = [trueBtnRef.current, falseBtnRef.current];
      const currIndex = buttons.indexOf(
        document.activeElement as HTMLButtonElement
      );

      if (e.key === "Tab") {
        e.preventDefault();

        let nextIndex;
        if (e.shiftKey) {
          nextIndex = (currIndex - 1 + buttons.length) % buttons.length;
        } else {
          nextIndex = (currIndex + 1) % buttons.length;
        }

        buttons[nextIndex]?.focus();
      }
    }

    window.addEventListener("keydown", handleTab);

    return () => window.removeEventListener("keydown", handleTab);
  }, []);

  return (
    <div className={styles.overlay} onClick={() => onResolve(false)}>
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="description"
      >
        <p id="description">{text}</p>
        <div>
          <button
            type="button"
            autoFocus
            ref={trueBtnRef}
            onClick={() => onResolve(false)}
          >
            Não
          </button>

          <button
            type="button"
            className="danger"
            ref={falseBtnRef}
            onClick={() => onResolve(true)}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
