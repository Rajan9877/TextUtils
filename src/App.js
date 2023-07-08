import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './About';
import NoPage from './NoPage';
import Footer from './components/Footer';
function App() {
  const [mode, setMode] = useState('light')
  return (
    <>
     <Router>
        <Navbar mode={mode} setMode={setMode}/>
      <Switch>
          <Route exact path="/">
          <Textarea mode={mode} setMode={setMode}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode} setMode={setMode}/>
          </Route>
          <Route exact path="*">
            <NoPage />
          </Route>
        </Switch>
        <Footer mode={mode} setMode={setMode} />
        </Router>
    </>
  );
}

export default App;
