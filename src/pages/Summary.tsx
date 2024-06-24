import { useDispatch } from "react-redux";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import ConfirmButton from "../components/ConfirmButton";
import { decrementPageStep } from "../store/slices/pageStepSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


export default function Summary() {
  const mode = useSelector((state: RootState) => state.formMode.mode)

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
        <div className="flex">
          <div>
            <h2>Arcade  
              {mode ? ` (Yearly)` : ` (Monthly)`}
            </h2>
            <a className="text-sm font-normal text-main-grey underline underline-offset-2">Change</a>
            </div>
            <div>
              <h2></h2>
            </div>
        </div>
      </div>

      <div className="flex justify-between mt-auto">
          <BackButton backBtnOnClick={handleBackStep} />
          <ConfirmButton confirmBtnOnClick={handleNextStep} />
        </div>
      </div>
  )
}
