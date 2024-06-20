import React from "react";
import Header from "../components/Header";
import PlanCard from "../components/PlanCard";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import Checkbox from "../components/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { cardsYearly, cardsMonthly } from "../constants/planCardDb";
import { incrementPageStep, decrementPageStep } from "../store/slices/pageStepSlice";
import { setPlan } from "../store/slices/planSlice";


const Plan: React.FC = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: any) => state.formMode);
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  const handleCardClick = (card: any) => {
    setActiveCard(card.id);
    dispatch(setPlan(card)); // Dispatch selected plan to Redux store
  };

  const handleNextStep = () => {
    if (!activeCard) {
      console.log("Please select a plan");
    } else {
      dispatch(incrementPageStep());
    }
  };

  const handleBackStep = () => {
    dispatch(decrementPageStep());
  };

  return (
    <>
      <div className="mx-100 mt-10 flex flex-col">
        <Header
          headerText="Select your plan"
          paragraphText="You have the option of monthly or yearly billing."
        />
        <div className="flex gap-4">
          {mode
            ? cardsYearly.map((card) => (
                <PlanCard
                  id={card.id}
                  key={card.id}
                  text={card.text}
                  price={card.price}
                  icon={card.icon}
                  isActive={card.id === activeCard}
                  onClick={() => handleCardClick(card)}
                />
              ))
            : cardsMonthly.map((card) => (
                <PlanCard
                  id={card.id}
                  key={card.id}
                  text={card.text}
                  price={card.price}
                  icon={card.icon}
                  isActive={card.id === activeCard}
                  onClick={() => handleCardClick(card)}
                />
              ))}
        </div>

          <Checkbox />
        <div className="flex justify-between mt-auto">
          <BackButton backBtnOnClick={handleBackStep} />
          <NextButton nextBtnOnClick={handleNextStep} />
        </div>
      </div>
    </>
  );
};

export default Plan;
