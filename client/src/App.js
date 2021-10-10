import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Userlist from "./Compenents/Userlist";
import Login from "./Compenents/Login";

import { Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Profil from "./Compenents/Profil";
import { useDispatch } from "react-redux";
import { userActions } from "./features/user/actions";
import Fixtures from "./Compenents/User/Fixtures";
import Lobbies from "./Compenents/User/Lobbies";
import Players from "./Compenents/User/Players";
import Roster from "./Compenents/User/Roster";
import Editprofile from "./Compenents/Editprofile";
import "./App.css";
import Navbarr from "./Compenents/Navbar";
function App() {
  const [users, setUsers] = useState([]);
  const [ping, setPing] = useState(false);
  const dispatch = useDispatch();

  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      let x = axios.get("http://localhost:5000/api/user/");

      dispatch(userActions.current());
      setUsers(x);
    }
  }, [ping]);
 
  return (
    <div className="App">
      {/* <Userlist setPing={setPing} ping={ping}/> */}

      {isAuth ? <Navbarr /> : null}
      <Switch>
        <Route exact path="/">
          <Login setPing={setPing} ping={ping} />
        </Route>
        <Route path="/profil/fixtures">
          <Fixtures />
        </Route>
        <Route path="/profil/lobbies">
          <Lobbies />
        </Route>
        <Route path="/profil/players">
          <Players />
        </Route>
        <Route path="/profil/roster">
          <Roster  ping={ping} setPing={setPing}/>
        </Route>
        <Route path="/profil/edit">
          <Editprofile ping={ping} setPing={setPing} />
        </Route>
        <PrivateRoute path="/profil" component={Profil} />
        <Route path="*">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
