import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import apiFacade from './facades/apiFacade';

const AppWithRouter = () => {
  return (
    <Router>
      <App apiFacade={apiFacade} />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));