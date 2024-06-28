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
    >
      <span className="material-symbols-outlined">print</span>
    </button>
  );
}

export { PrintButton };
