import React from "react";
import Header from "../components/Header";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { incrementPageStep, decrementPageStep } from "../store/slices/pageStepSlice";
import PickAddCard from "../components/PickAddCard";
import { AddOns } from "../constants/planCardDb";
import { setAddOns } from "../store/slices/addOnsSlice";
import { RootState } from "../store/store";

const Add: React.FC = () => {
  const dispatch = useDispatch();
  const [activeCards, setActiveCards] = React.useState<string[]>([]); // Array to handle multiple active cards
  const selectedAddOns = useSelector((state: RootState) => state.addOns.selectedAddOns);

  const handleCardClick = (id: string) => {
    setActiveCards((prevActiveCards) =>
      prevActiveCards.includes(id)
        ? prevActiveCards.filter((cardId) => cardId !== id) // Remove the card if it's already active
        : [...prevActiveCards, id] // Add the card if it's not active
    );
  };

  const handleNextStep = () => {
    if (activeCards.length === 0) {
      console.log("Please select at least one add-on");
    } else {
      console.log("Selected Add-Ons: ", activeCards);
      dispatch(setAddOns({ selectedAddOns: activeCards })); // Dispatch selected add-ons to Redux store
      dispatch(incrementPageStep());
    }
  };
  
  const handleBackStep = () => {
    dispatch(decrementPageStep());
  };

  React.useEffect(() => {
    console.log("Redux Store - Selected Add-Ons: ", selectedAddOns);
  }, [selectedAddOns]);

  return (
    <>
      <div className="mx-100 mt-10 flex flex-col">
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

        <div className="flex justify-between mt-auto">
          <BackButton backBtnOnClick={handleBackStep} />
          <NextButton nextBtnOnClick={handleNextStep} />
        </div>
      </div>
    </>
  );
};

export default Add;
