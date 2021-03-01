import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Post from "./Components/Post";
import Project from "./Components/Project";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <Route component={Navbar} path='/navbar' />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
