import React from "react";
import Header from "../components/Header";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import { useDispatch } from "react-redux";
import {
  incrementPageStep,
  decrementPageStep,
} from "../store/slices/pageStepSlice";
import PickAddCard from "../components/PickAddCard";
import { AddOns } from "../constants/planCardDb";

const Add: React.FC = () => {
  const dispatch = useDispatch();
  const [activeCards, setActiveCards] = React.useState<string[]>([]); // Array to handle multiple active cards
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null); // Error message state

  const handleCardClick = (id: string) => {
    setActiveCards(
      (prevActiveCards) =>
        prevActiveCards.includes(id)
          ? prevActiveCards.filter((cardId) => cardId !== id) // Remove the card if it's already active
          : [...prevActiveCards, id] // Add the card if it's not active
    );
  };

  const handleNextStep = () => {
    if (activeCards.length === 0) {
      setErrorMessage("Please choose at least one add-on.");
    } else {
      setErrorMessage(null);
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
          headerText="Pick add-ons"
          paragraphText="Add-ons help enhance your gaming experience."
        />
        <div className="flex flex-col gap-4">
          {AddOns.map((addOn) => (
            <PickAddCard
              key={addOn.id} // Add key prop
              text={addOn.text}
              paragraph={addOn.paragraph}
              price={addOn.price}
              id={addOn.id}
              isActive={activeCards.includes(addOn.id)}
              onClick={() => handleCardClick(addOn.id)}
            />
          ))}
        </div>

        {errorMessage && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}

        <div className="flex justify-between flex-1">
          <BackButton backBtnOnClick={handleBackStep} />
          <NextButton nextBtnOnClick={handleNextStep} />
        </div>
      </div>
    </>
  );
};

export default Add;
