import React from 'react'
import Student from './Student'

const ListStudents = ({ students, deleteStudent }) => {
    const isData = Object.keys(students).length
    return (
        <div className="columns box is-centered">

            {isData !== 0 ?
                <div className="column is-12">
                <div className="columns is-right">
                    <div className="column is-12">
                        <h2 className="title is-1 has-text-right">Todos los alumnos</h2>
                    </div>
                </div>

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
                            {students && students.map((student, i) =>
                                <Student
                                    key={student.id}
                                    student={student}
                                    deleteStudent={deleteStudent}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div> :
            <div className="columns is-right">
                <div className="column is-12">
                    <h2 className="title is-1 has-text-right">Sin alumnos</h2>
                </div>
            </div>
            }
        </div>
    )
}

export default ListStudents