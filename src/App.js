import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DetailStudent from './components/DetailStudent';
import AddStudent from './components/AddStudent';
import ListStudents from './components/ListStudents';
import EditStudent from './components/EditStudent'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/students" component={ListStudents} />
          <Route exact path="/students/new" component={AddStudent} />
          <Route exact path="/students/detail/:id" component={DetailStudent} />
          <Route exact path="/students/edit/:id" component={EditStudent} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
