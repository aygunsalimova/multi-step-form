import React from "react";

interface BackButtonProps {
  backBtnOnClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ backBtnOnClick }) => {
    return <>
     <button
        className="bg-transparent text-main-grey float-left font-medium"
        type="submit"
        onClick={backBtnOnClick}
      >
        Go Back
      </button>
    </>
}

export default BackButton;