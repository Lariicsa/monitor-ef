import React, { Component } from 'react'
import Header from './components/Header';
import AddStudent from './components/AddStudent';

class App extends Component {
  state = {}

  addStudent = data => {
    console.log(data);
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
                addStudent={this.addStudent}
                 />
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default App;
