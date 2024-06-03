import React from "react";
import Header from "../components/Header";
import PlanCard from "../components/PlanCard";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import Checkbox from "../components/Checkbox";
import { useSelector } from "react-redux";
import { cardsYearly, cardsMonthly } from "../constants/planCardDb";
import { useDispatch } from "react-redux";
import { incrementPageStep, decrementPageStep } from "../store/slices/pageStepSlice";

const Plan: React.FC = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: any) => state.formMode);
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCard(id);
  };

  const handleNextStep = () => {
    if (!activeCard) {
      dispatch;
    } else {
      dispatch(incrementPageStep());
    }
  };

  const handleBackStep = () => {
    dispatch(decrementPageStep());
  };

  return (
    <>
      <div className="mx-100 my-10">
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
                  onClick={() => handleCardClick(card.id)}
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
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
        </div>

        <Checkbox />
        <BackButton backBtnOnClick={handleBackStep}/>
        <NextButton nextBtnOnClick={handleNextStep} />
      </div>
    </>
  );
};

export default Plan;
