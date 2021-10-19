import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Career from "./Pages/Career/Career";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/HomePage/Home";
import SingleService from "./Pages/HomePage/SingleService/SingleService";
import Login from "./Pages/Login/Login";
import NotMatch from "./Pages/NotMatch/NotMatch";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import PrivateRoute from "./PrivetRoute/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/career">
              <Career></Career>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="/*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
