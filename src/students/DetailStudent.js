import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

class DetailStudent extends Component {
    state = {}
    render() {
        const { student } = this.props

        if (!student) return <strong>Cargando ...</strong>

        return (
            <div className="columns is-centered">
                <div className="column is-8 box">
                    <div className="columns is-centered">
                        <div className="column is-12">
                            <h2 className="title is-2 has-text-centered">Detalle de Alumno</h2>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column">
                            <h3 className="title is-3">{student.name} {student.lastname1} {student.lastname2}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column">
                            <p>Grupo: <strong>{student.level} {student.group}</strong></p>
                            <p>Edad: <strong>{student.age}</strong></p>
                            <p>Género: <strong>{student.gender}</strong></p>
                            <hr />
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column">
                            <h3 className="title is-3">Mediciones</h3>
                             <strong>{student.mediciones[0]}</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'alumnos',
            storeAs: 'student',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        student: ordered.student && ordered.student[0]
    }))
)(DetailStudent)