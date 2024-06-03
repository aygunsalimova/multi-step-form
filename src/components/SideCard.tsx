import cardIcon from '../assets/images/side-card-icon.png'
import { useSelector } from "react-redux";


function SideCard() {
    const { pageStep } = useSelector((state: any) => state.pageStep);

  return (
    <>
      <div className="container max-w-72 pt-10 pl-8 bg-main-blue h-568 flex flex-col justify-between rounded-lg">
        <div>
            <div className='flex items-center gap-4 mb-8'>
            <p className={`text-sm text-white font-bold border border-sky-blue p-2 h-33 w-33 flex justify-center items-center rounded-full ${pageStep === 1 ? `activeStepCircle` : ''}`}>1</p>
                <div>
                    <span className='text-xs text-white'>STEP 1</span>
                    <h4 className='text-sm font-bold text-white'>YOUR INFO</h4>
                </div>
            </div>
            <div className='flex items-center gap-4 mb-8'>
            <p className={`text-sm text-white font-bold border border-sky-blue p-2 h-33 w-33 flex justify-center items-center rounded-full ${pageStep === 2 ? `activeStepCircle` : ''}`}>2</p>
                <div>
                    <span className='text-xs text-white'>STEP 2</span>
                    <h4 className='text-sm font-bold text-white'>SELECT PLAN</h4>
                </div>
            </div>
            <div className='flex items-center gap-4 mb-8'>
            <p className={`text-sm text-white font-bold border border-sky-blue p-2 h-33 w-33 flex justify-center items-center rounded-full ${pageStep === 3 ? `activeStepCircle` : ''}`}>3</p>
                <div>
                    <span className='text-xs text-white'>STEP 3</span>
                    <h4 className='text-sm font-bold text-white'>ADD-ONS</h4>
                </div>
            </div>
            <div className='flex items-center gap-4'>
            <p className={`text-sm text-white font-bold border border-sky-blue p-2 h-33 w-33 flex justify-center items-center rounded-full ${pageStep === 4 ? `activeStepCircle` : ''}`}>4</p>
                <div>
                    <span className='text-xs text-white'>STEP 4</span>
                    <h4 className='text-sm font-bold text-white'>SUMMARY</h4>
                </div>
            </div>
        </div>
        <img src={cardIcon} alt="" />
      </div>
    </>
  );
}

export default SideCard;
