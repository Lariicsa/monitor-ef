import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import DetailStudent from './students/DetailStudent';
import AddStudent from './students/AddStudent';
import ListStudents from './students/ListStudents';
import EditStudent from './students/EditStudent'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
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

export default App
