// import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import EmailSummary from "../../../components/EmailSummary/EmailSummary";

const MainContent = () => {
  // const { folder } = useParams();
  return (
    <div>
      <EmailSummary />
      <Outlet />
    </div>
  );
};

export default MainContent;
