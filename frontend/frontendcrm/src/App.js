// React 
import React, { useEffect } from 'react';
// Redux
import { loadUser } from './redux/actions/auth'
import { useDispatch } from 'react-redux'

// React Router DOM
import { 
  BrowserRouter as Router, 
  Switch,
  Route,} 
  from "react-router-dom";
// CSS 
import './App.css';
// Private Route
import PrivateRoute from "../src/PrivateRouter/PrivateRoute"
// Components
import login from './components/Accounts/login'
import Contacts from './components/views/Contacts'
import Dashboard from './components/views/Dashboard'
import Companies from './components/views/Companies'
import Projects from './components/views/Projects'
import SideBar from './components/Navigation/Sidebar/sidebar'
import ContactDetailView from './components/DetailViews/ContactDetailView';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  });  
  return (
     
      <Router>
        <Switch>
            {/* Public Routes */}
            <Route exact path="/login" component={login}/>
            {/* Private Routes */}
            <PrivateRoute exact path="/" component={SideBar} componentview={Dashboard}/> 
            <PrivateRoute exact path="/contacts" component={SideBar} componentview={Contacts}/>   
            <PrivateRoute path="/contacts/:id" component={SideBar} componentview={ContactDetailView}/>
            <PrivateRoute path="/companies" component={SideBar} componentview={Companies}/>
            <PrivateRoute path="/projects" component={SideBar} componentview={Projects}/>

            
            
        </Switch>     
      </Router>
     
   
  );
}

export default App;
