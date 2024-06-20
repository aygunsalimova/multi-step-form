interface ConfirmButtonProps {
    confirmBtnOnClick: () => void;
  }

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ confirmBtnOnClick }) => {
  return (
    <button
    className="border bg-main-blue text-white px-6 py-3 h-12 w-32 float-right rounded-lg"
    type="submit"
    onClick={confirmBtnOnClick}
  >
    Confirm
  </button>
  )
}

export default ConfirmButton