import React from "react";

interface NextButtonProps {
  nextBtnOnClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ nextBtnOnClick }) => {
  return (
    <>
      <button
        className="border bg-btn-blue text-white px-6 py-3 h-12 w-32 float-right rounded-lg"
        type="submit"
        onClick={nextBtnOnClick}
      >
        Next Step
      </button>
    </>
  );
};

export default NextButton;
