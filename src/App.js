import React, { Component } from 'react'
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import ListStudents from './components/ListStudents';

class App extends Component {
  state = {
    students: []
  }

  addNewStudent = data => {
    const students = [...this.state.students, data]
    console.log(data);

    this.setState({
      students
    })
  }
  render() {
    return (
      <>
        <Header title='Monitor EF' />
        <div className="App container">
          <section className="section">
            <div className="columns box is centered">
              <div className="column is-12">
                <AddStudent
                  addNewStudent={this.addNewStudent}
                />
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns box is centered">
              <div className="column is-12">
                <ListStudents
                students={this.state.students} />
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default App;
