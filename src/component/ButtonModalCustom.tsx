import { useState } from "react";
import Modal from "./ModalCustom";

type ButtonModalCustomProps = {
  label: string;
  image: string;
};

const ButtonModalCustom: React.FC<ButtonModalCustomProps> = ({
  label,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 animate-fade-in-up opacity-0 animation-delay-500"
      >
        {label}
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img src={image} width={800} height={600} alt={label} />
      </Modal>
    </div>
  );
};

export default ButtonModalCustom;
