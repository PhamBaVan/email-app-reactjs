import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import EmailDetail from "./components/EmailDetail/EmailDetail";
import Login from "./components/Login/Login";
import { GlobalContext } from "./contexts/global";
import emailsData from "./data/messages.json";
import ContactPage from "./pages/Contact/Contact";
import EmailPage from "./pages/Email/Email";
import HomePage from "./pages/Home/Home";
import MainPage from "./pages/Main/MainPage";
import { Email } from "./types/Email";

function App() {
  const [dataFromChild, setDataFromChild] = useState(false);
  const [emails, setEmails] = useState<Email[]>(emailsData);
  const handleDataFromChild = (data: boolean) => {
    setDataFromChild(data);
  };
  return (
    <GlobalContext.Provider value={{ emails, setEmails }}>
      <Routes>
        <Route element={<PrivateRoutes auth={dataFromChild} />}>
          <Route path="/main" element={<MainPage authen={setDataFromChild} />}>
            <Route index element={<Navigate to="email" />}></Route>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="email" element={<EmailPage />}>
              <Route path=":folder" element={<Outlet />}>
                <Route path=":id" element={<EmailDetail />}></Route>
              </Route>
            </Route>
            <Route path="contact" element={<ContactPage />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" />}></Route>
        </Route>
        <Route
          path="/login"
          element={<Login auth={dataFromChild} authen={handleDataFromChild} />}
        />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
