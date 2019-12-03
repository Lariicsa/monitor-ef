import React from 'react';
import Header from './components/Header';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <>
    <Header title='Dates manager'/>
    <div className="App container">
      <section className="section">
        <div className="columns box is centered">
          <div className="column is-12">
            <AddStudent />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;
