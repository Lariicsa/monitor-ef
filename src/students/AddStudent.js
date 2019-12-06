import React, { Component } from 'react'

// const initialState = {
//     student: {
//         level: '',
//         group: '',
//         name: '',
//         lastname1: '',
//         lastname2: '',
//         age: 0,
//         gender: '',
//     },
//     error: false
// }

class addStudent extends Component {
   
    render() {
        const { error } = this.state
        return (
            <div className="columns is-centered">
                <div className="column is-12">
                    <div className="columns is-center">
                        <div className="column is-12">
                            <h2 className="title is-1 has-text-right">Agregar alumno</h2>
                        </div>
                    </div>
                    <div className="columns is-center">
                        <div className="column is-8">
                            <form className="box" onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <label className="label">Grupo:</label>
                                    <div className="select">
                                        <select name="level" value={this.state.student.level} onChange={this.handleInput}>
                                            <option disabled ></option>
                                            <option value="1ro">1ro</option>
                                            <option value="2do">2do</option>
                                            <option value="3ro">3ro</option>
                                        </select>
                                    </div>
                                    <div className="select">
                                        <select name="group" value={this.state.student.group} onChange={this.handleInput}>
                                            <option disabled ></option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                    {error ?
                                        <p className="help is-danger">Por favor agrega un grupo</p>
                                        : null}
                                </div>

                                <div className="field">
                                    <label className="label">Nombre(s):</label>
                                    <input className="input"
                                        onChange={this.handleInput}
                                        value={this.state.student.name}
                                        type='text'
                                        name='name'
                                    />
                                </div>
                                <div className="field">
                                    <label className="label">Apellido paterno:</label>
                                    <input className="input"
                                        onChange={this.handleInput}
                                        value={this.state.student.lastname1}
                                        type='text'
                                        name='lastname1'
                                    />
                                </div>

                                <div className="field">
                                    <label className="label">Apellido materno:</label>
                                    <input className="input"
                                        onChange={this.handleInput}
                                        value={this.state.student.lastname2}
                                        type='text'
                                        name='lastname2'
                                    />
                                </div>

                                <div className="field">
                                    <label className="label">Edad:</label>
                                    <input className="input"
                                        onChange={this.handleInput}
                                        value={this.state.student.age}
                                        type='number'
                                        name='age'
                                    />
                                </div>

                                <div className="field">
                                    <label className="label">Género:</label>
                                    <div className="select">
                                        <select name="gender" value={this.state.student.gender} onChange={this.handleInput} >
                                            <option disabled ></option>
                                            <option value="Femenino">Femenino</option>
                                            <option value="Masculino">Masculino</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="button is-fullwidth is-primary" type='submit'>Agregar Alumno</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default addStudent