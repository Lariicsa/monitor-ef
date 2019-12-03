import React, { Component } from 'react'

class AddStudent extends Component {
    state = {
        student: {
            level: '',
            group: '',
            name: '',
            lastname1: '',
            lastname2: '',
            age: 0,
            gender: '',
        }
    }
    handleInput = e => {
        console.log(e.target.name + ':' + e.target.value);
        this.setState({
            student: {
                ...this.state.student,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
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
                            <form className="box" onSubmit={this.addStudent}>
                                <div className="field">
                                    <label className="label">Grado</label>
                                    <div className="select">
                                        <select>
                                            <option value="option 1"></option>
                                        </select>
                                    </div>
                                    <div className="select">
                                    <label className="label">Grupo</label>
                                        <select>
                                            <option value="option 1"></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Nombre(s):</label>
                                    <input className="input"
                                        required
                                        onChange={this.handleInput}
                                        value={this.state.student.name}
                                        type='text'
                                        name='name'
                                    />
                                </div>
                                <div className="field">
                                    <label className="label">Apellido paterno:</label>
                                    <input className="input"
                                        required
                                        onChange={this.handleInput}
                                        value={this.state.student.lastname1}
                                        type='text'
                                        name='lastname1'
                                    />
                                </div>

                                <div className="field">
                                    <label className="label">Apellido materno:</label>
                                    <input className="input"
                                        required
                                        onChange={this.handleInput}
                                        value={this.state.student.lastname2}
                                        type='text'
                                        name='lastname2'
                                    />
                                </div>

                                <div className="field">
                                    <label className="label">Edad:</label>
                                    <input className="input"
                                        required
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

export default AddStudent