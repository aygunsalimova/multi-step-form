import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/slices/cardSlice";
// import { IRootStore } from "../store";



const Checkbox: React.FC = () => {
  const {mode} = useSelector((state: any) => state.formMode);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleMode()); 

  };

  return (
    <div className="flex bg-very-light-grey rounded-lg px-32 py-3 gap-6 mt-8">
      <h4 className={`text-sm font-bold ${mode ? "text-main-grey" : "text-dark-blue"}`}>Monthly</h4>
      <label className="switch">
        <input type="checkbox" value={mode}  onChange={handleCheckboxChange} />
        <span className="slider"></span>
      </label>
      <h4 className={`text-sm font-bold ${mode ? "text-dark-blue" : "text-main-grey"}`}>Yearly</h4>
    </div>
  );
};

export default Checkbox;
