import React from 'react'

const Student = ({ student }) => {
    return (
        <tr>
            <td>{student.i}</td>
            <td>{student.name} {student.lastname1} {student.name2}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>{student.level} {student.group}</td>
            <td></td>
        </tr>
    )
}

export default Student