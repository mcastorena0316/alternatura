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
import Footer from '../Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App" id="App">
      <Header />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      <Footer />
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
