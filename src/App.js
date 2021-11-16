import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Booking from './Pages/Home/Booking/Booking';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/booking/:bookingId">
            <Booking />
          </Route>
          <Route path="/signIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
