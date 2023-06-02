import { Navigate, Outlet } from "react-router-dom";

interface Props {
  auth: boolean;
}

const PrivateRoutes: React.FC<Props> = ({ auth }) => {
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
