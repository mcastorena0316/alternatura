import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pedidos from '../Pedidos';
import Header from '../Header';
import Menu from '../Menu';
import Main from '../Main';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main />
          )}
        />
        <Route
          exact
          path="/pedidos"
          render={() => <Pedidos />}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
