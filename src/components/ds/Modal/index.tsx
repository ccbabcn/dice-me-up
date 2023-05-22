import { Button } from "../Button";

type ModalProps = {
  modalMessage: string;
  buttonMessage: string;
  onClick: VoidFunction;
};

export const Modal = ({ modalMessage, buttonMessage, onClick }: ModalProps) => {
  return (
    <div className="Modal fixed inset-0 flex justify-center items-center z-50">
      <div className="Modal__Background fixed inset-0 bg-black opacity-90"></div>
      <div className="Modal__Container flex flex-col relative p-6">
        <span className="Modal__Text mb-4 text-center">{modalMessage}</span>
        <Button
          onClick={onClick}
          message={buttonMessage}
          type="secondary"
          isActive
        />
      </div>
    </div>
  );
};

Modal.displayName = "Modal";
