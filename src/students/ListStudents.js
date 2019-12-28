import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

const ListStudents = ({ alumnos }) => {
    if (!alumnos) return <strong>Cargando...</strong>

    return (
        <div className="table-wrapper">
            <table className="table is-fullwidth ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Género</th>
                        <th>Grupo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos && alumnos.map((student, i) =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name} {student.lastname1} {student.name2}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.level} {student.group}</td>
                            <td><Link to={`/students/detail/${student.id}`} className="button is-primary">Ver</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default compose(
    firestoreConnect([{ collection: 'alumnos' }]),
    connect((state, props) => ({
        alumnos: state.firestore.ordered.alumnos
    }))
)(ListStudents)