import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import DetailStudent from './students/DetailStudent';
import AddStudent from './students/AddStudent';
import ListStudents from './students/ListStudents';
import EditStudent from './students/EditStudent'
import Header from "./components/Header/Header";
import './scss/index.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <section className="section">
            <Switch>
              <Route exact path="/students" component={ListStudents} />
              <Route exact path="/students/new" component={AddStudent} />
              <Route exact path="/students/detail/:id" component={DetailStudent} />
              <Route exact path="/students/edit/:id" component={EditStudent} />
            </Switch>
          </section>
        </Router>
      </Provider>
    )
  }
}

export default App
