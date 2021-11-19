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
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Admin from './Pages/Admin/Admin/Admin';

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
          <PrivateRoute exact path="/services/:bookingId">
            <Booking />
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/signIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          
          <Route path="/admin">
            <Admin></Admin>
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
