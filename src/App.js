import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Mail from "./component/Mail/Mail";
import EmailList from "./component/EmailList/EmailList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SendMail from "./component/SendMail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./component/Login/Login";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
