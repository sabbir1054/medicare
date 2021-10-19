
import { EmailAuthProvider } from "@firebase/auth";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Career from "./Pages/Career/Career";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/Login/Login";
import NotMatch from "./Pages/NotMatch/NotMatch";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SingleService from "./Pages/SingleService/SingleService";
import AuthProvider from './Context/AuthProvider'

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
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/career">
              <Career></Career>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home/:serviceId">
              <SingleService></SingleService>
            </Route>
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
