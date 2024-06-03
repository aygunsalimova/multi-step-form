import Info from "./Info";
import Plan from "./Plan";
import Add from "./Add";
import Summary from "./Summary"
import SideCard from "../components/SideCard";
import { useSelector } from "react-redux";


function Page() {
  const { pageStep } = useSelector((state: any) => state.pageStep);

  const renderStepContent = () => {
    switch (pageStep) {
      case 2:
        return <Plan />;
      case 3:
        return <Add />;
      case 4:
        return <Summary />;
      default:
        return <Info />;
      }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-bg">
      <div className="bg-white p-4 rounded-lg flex">
        <SideCard />
        {renderStepContent()}
      </div>
    </div>
  );
}

export default Page;
