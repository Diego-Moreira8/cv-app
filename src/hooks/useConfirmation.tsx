import { useState, ReactNode } from "react";
import { Modal } from "../components/Modal";

function useConfirmation() {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalPromise, setModalPromise] = useState<{
    resolve: (value: boolean) => void;
    reject: () => void;
  } | null>(null);

  function confirmAction(text: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setModalText(text);
      setModalPromise({ resolve, reject });
      setShowModal(true);
    });
  }

  function handleModalResponse(response: boolean) {
    modalPromise?.resolve(response);
    setShowModal(false);
    setModalPromise(null);
  }

  function ConfirmationModal(): ReactNode {
    return (
      showModal && <Modal text={modalText} onResolve={handleModalResponse} />
    );
  }

  return { confirmAction, ConfirmationModal };
}

export { useConfirmation };
