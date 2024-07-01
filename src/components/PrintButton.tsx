import style from "../styles/PrintButton.module.css";

function PrintButton() {
  function triggerPrint() {
    window.print();
  }

  return (
    <button
      type="button"
      className={`${style.button} ok`}
      onClick={triggerPrint}
      aria-label="Imprimir"
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        print
      </span>
    </button>
  );
}

export { PrintButton };
