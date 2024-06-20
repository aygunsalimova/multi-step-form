import { useDispatch } from "react-redux";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import ConfirmButton from "../components/ConfirmButton";
import { incrementPageStep, decrementPageStep } from "../store/slices/pageStepSlice";


export default function Summary() {
  const dispatch = useDispatch();

  const handleNextStep = () => {
    // if () {
      
    // } else {
    //   dispatch(incrementPageStep());
    // }
  };

  const handleBackStep = () => {
    dispatch(decrementPageStep());
  };
  return (
    <div className="mx-100 flex flex-col">
      <Header
        headerText="Finishing up"
        paragraphText="Double-check everything looks OK before confirming."
      />
      <div className="w-450 bg-very-light-grey py-4 px-6 rounded-lg">
        <h2>Arcade</h2>
      </div>

      <div className="flex justify-between mt-auto">
          <BackButton backBtnOnClick={handleBackStep} />
          <ConfirmButton confirmBtnOnClick={handleNextStep} />
        </div>
      </div>
  )
}
