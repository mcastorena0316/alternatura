import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pedidos from '../Pedidos';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Sidebar />
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
