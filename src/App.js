import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddDestination from './Components/AddDestination/AddDestination';
import AddReview from './Components/AddReview/AddReview';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import OrderList from './Components/OrderList/OrderList';
import ManageServices from './Components/ManageServices/ManageServices';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
            <Home></Home>
            </Route>

            <Route path='/login'>
            <Login></Login>
            </Route>
            <PrivateRoute path='/paymant/:destinationId'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            

            <Route  path='/addDestination'>
            <AddDestination></AddDestination>
            </Route>
            <Route  path='/addReview'>
            <AddReview></AddReview>
            </Route>
            <Route path='/addAdmin'>
              <AddAdmin></AddAdmin>
            </Route>
            <Route path='/orderList'>
              <OrderList></OrderList>
            </Route>
            <Route path='/manageServices'>
              <ManageServices></ManageServices>
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
  );
}

export default App;
