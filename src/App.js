import React,{ useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './MovieCard'
import { Button,Input,IconButton  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListsComponent from './ListsComponent'

function App() {

    return (
    <div className="App">

        <ListsComponent />
        
            
    </div>
  );
}

export default App;
