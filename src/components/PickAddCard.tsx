import React from "react";

interface PickAddCardProps {
  text: string;
  price: number;
  id: string;
  paragraph: string;
}

const PickAddCard: React.FC<
  PickAddCardProps & { isActive: boolean; onClick: (id: string) => void }
> = ({ id, isActive, onClick, text, price, paragraph }) => {
  return (
    <>
      <div
        className={`flex px-018 py-6 border border-border-grey w-450 h-81 rounded-lg hover:border-main-purple hover:border hover:cursor-pointer ${
          isActive ? "active" : ""
        }`}
        onClick={() => onClick(id)}
      >
        <input type="checkbox" name="" id={id} className="mr-6" checked={isActive} readOnly/>
        <div className="flex justify-between w-full items-center">
          <div>
            <h5 className="mb-1 text-dark-blue leading-5 font-medium">
              {text}
            </h5>
            <p className="text-sm text-main-grey">{paragraph}</p>
          </div>
          <p className="text-sm text-main-blue leading-5">+${price}/mo</p>
        </div>
      </div>
    </>
  );
};

export default PickAddCard;
