   
   import './App.css'
    import React, { useState } from 'react'
    import NavBar from './components/NavBar';
    import News from './components/News';
    import LoadingBar from 'react-top-loading-bar'
    import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


    const App =()=> {
    const pageSize  = 5;
    const apiKey = process.env.REACT_APP_NEWS_API;

    const [progress, setProgress] = useState(0)

        return (
          <div>
            <Router>
                <NavBar />
                <LoadingBar
                      color='#f11946'
                      height={3}
                      progress={progress}
                    
                />

                <Switch>
                      <Route exact path="/"><News  setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="us" category="general"/></Route>
                      <Route exact path="/Business"><News  setProgress={setProgress} apiKey={apiKey}  key="Business" pageSize={pageSize} country="us" category="Business"/></Route>
                      <Route exact path="/Entertainment"><News  setProgress={setProgress} apiKey={apiKey}  key="Entertainment" pageSize={pageSize} country="us" category="Entertainment"/></Route>
                      <Route exact path="/General"><News  setProgress={setProgress} apiKey={apiKey}  key="General" pageSize={pageSize} country="us" category="General"/></Route>
                      <Route exact path="/Health"><News  setProgress={setProgress} apiKey={apiKey}  key="Health" pageSize={pageSize} country="us" category="Health"/></Route>
                      <Route exact path="/Science"><News  setProgress={setProgress} apiKey={apiKey}  key="Science" pageSize={pageSize} country="us" category="Science"/></Route>
                      <Route exact path="/Sports"><News  setProgress={setProgress} apiKey={apiKey}  key="Sports" pageSize={pageSize} country="us" category="Sports"/></Route>
                      <Route exact path="/Technology"><News  setProgress={setProgress} apiKey={apiKey}  key="Technology" pageSize={pageSize} country="us" category="Technology"/></Route>
                </Switch>
            </Router>
          </div>
        )  
    }


export default App;    