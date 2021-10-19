
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Doctors></Doctors>
            {/* <Login></Login> */}
            {/* <Home></Home> */}
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
