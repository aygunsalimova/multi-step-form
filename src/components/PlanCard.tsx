import React from "react";

interface PlanCardProps {
  icon: React.ReactNode | null;
  text: string;
  price: number;
  id: string;
}

const PlanCard: React.FC<
  PlanCardProps & { isActive: boolean; onClick: (id: string) => void }
> = ({ id, isActive, onClick, icon, text, price }) => {
  return (
    <>
      <div
        className={`flex flex-col px-4 py-5 border border-border-grey w-138 h-39 rounded-lg hover:border-main-purple hover:border hover:cursor-pointer ${
          isActive ? "active" : ""
        }`}
        onClick={() => onClick(id)}
      >
        {icon && <div className="icon mb-10">{icon}</div>}
        <h5 className="mb-1 text-dark-blue leading-5 font-medium">{text}</h5>
        <p className="text-sm text-main-grey">${price}/mo</p>
        {["5", "4", "6"].includes(id) && <p>2 months free</p>}
      </div>
    </>
  );
};

export default PlanCard;
