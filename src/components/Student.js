import React from 'react'

const Student = ({ student, deleteStudent }) => {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name} {student.lastname1} {student.name2}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>{student.level} {student.group}</td>
            <td><button className="button is-danger" onClick={()=>deleteStudent(student.id)}>Eliminar</button></td>
        </tr>
    )
}

export default Student