import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./components/Login/Login";
import Contact from "./components/pages/contact/Contact";
import Email from "./components/pages/email/email-component/Email";
import EmailLayOut from "./components/pages/email/email-layout-component/EmailLayOut";
import Drafts from "./components/pages/email/email-navigation-child-component/drafts/Drafts";
import Favorite from "./components/pages/email/email-navigation-child-component/favorite/Favorite";
import Inbox from "./components/pages/email/email-navigation-child-component/inbox/Inbox";
import Junks from "./components/pages/email/email-navigation-child-component/junks/Junks";
import Reminder from "./components/pages/email/email-navigation-child-component/reminder/Reminder";
import Sent from "./components/pages/email/email-navigation-child-component/sent/Sent";
import Spam from "./components/pages/email/email-navigation-child-component/spam/Spam";
import Home from "./components/pages/home/Home";

function App() {
  const [dataFromChild, setDataFromChild] = useState(false);
  const handleDataFromChild = (data: boolean) => {
    setDataFromChild(data);
  };
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes auth={dataFromChild} />}>
          <Route index element={<Navigate to="/email" />}></Route>
          <Route path="/email" element={<Email authen={handleDataFromChild} />}>
            <Route index element={<EmailLayOut />}></Route>
            <Route path="inbox" element={<Inbox />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
            <Route path="sent" element={<Sent />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
            <Route path="reminder" element={<Reminder />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
            <Route path="spam" element={<Spam />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
            <Route path="favorite" element={<Favorite />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
            <Route path="junks" element={<Junks />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
            <Route path="drafts" element={<Drafts />}>
              <Route path=":id" element={<h1>dsasd</h1>} />
            </Route>
          </Route>
          <Route path="/home" element={<Home authen={handleDataFromChild} />} />
          <Route
            path="/contact"
            element={<Contact authen={handleDataFromChild} />}
          />
          <Route path="*" element={<Navigate to="/login" />}></Route>
        </Route>
        <Route
          path="/login"
          element={<Login auth={dataFromChild} authen={handleDataFromChild} />}
        />
      </Routes>
    </>
  );
}

export default App;
