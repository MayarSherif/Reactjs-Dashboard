import React from 'react';
import "./App.scss";
import { useSelector} from "react-redux";
import Router from './routes/Router';
import Routermain from './routes/Routermain';
import Sidebar from "./components/Sidebar/Sidebar";
import TopNav from "./components/TopNav/TopNav";



const App = () => {

  
  const{currentUser} = useSelector( (state) => state.userRed );

  if(currentUser){
    const{accessToken} = currentUser;
    if (accessToken) {
      return (
        <div className="layout">
          <Sidebar className='sidebar' />
          <div className="main__layout">
            <TopNav />
            <div className="content">
              <Router />
            </div>
          </div>
        </div>
      )
    } 
  } else if(!currentUser) {
    // if(!(window.location.pathname === '/signin') || !(window.location.pathname === '/signup')){
    //   return (
      
    
    //     <Navigate to={'/signin'} />
  
    //   )
    // } else{
      return (
      
    
        <Routermain />
  
      )
    }
  }


  




export default App;
