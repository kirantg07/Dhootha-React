
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
const apikey=process.env.REACT_APP_NEWS_API;
const [progress,setProgress] = useState(0);


  
    return (
      <>
      <Router>
      <Navbar/>
      
          <Routes>
          <Route exact path="/Bussiness" element=    {<News apikey={apikey} setProgress={setProgress}  key="Business" country="in" pageSize={9} category="Bussiness"/>}/>
          <Route exact path="/Sports" element=       {<News apikey={apikey} setProgress={setProgress}  key="Sports" country="in" pageSize={9} category="Sports"/>}/>
          <Route exact path="/Health" element=       {<News apikey={apikey} setProgress={setProgress}  key="Health" country="in" pageSize={9} category="Health"/>}/>
          <Route exact path="/Entertainment" element={<News apikey={apikey} setProgress={setProgress}  key="Entertainment" country="in" pageSize={9} category="Entertainment"/>}/>
          <Route exact path="/Science" element=      {<News apikey={apikey} setProgress={setProgress}  key="Science" country="in" pageSize={9} category="Science"/>}/>
          <Route exact path="/General" element=      {<News apikey={apikey} setProgress={setProgress}  key="General" country="in" pageSize={9} category="General"/>}/>
          </Routes> 
        
      
          <LoadingBar
        color='#f11946' setProgress={progress}/>
      </Router>
      </>
    )
  
}
export default App;