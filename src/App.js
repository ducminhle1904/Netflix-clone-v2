import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen.jsx";
import Login from "./pages/Login/Login.jsx";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./pages/Profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
