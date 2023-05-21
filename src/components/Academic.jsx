import React from 'react'

const Academic = ({data, update}) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ backgroundColor: "crimson", color: "white" }}>
          <th>Academic Year</th>
          <th>Semester</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((academic) => (
          <tr key={academic.id}>
            <td>{academic.ay}</td>
            <td>{academic.sem}</td>
            <td>{academic.open === 1 ? "Open" : "Closed"}</td>
            <td>
              <input
                type="checkbox"
                checked={academic.open === 1 ? true : false}
                onChange={() => update(academic.id, academic.open)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Academic