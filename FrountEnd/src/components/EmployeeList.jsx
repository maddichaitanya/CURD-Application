function EmployeeList({ employees, onEdit, onDelete }) {

    return (
        <div>
            <h2>Employee List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>

                            <td>
                                <button onClick={() => onEdit(employee)}>
                                    Edit
                                </button>

                                <button onClick={() => onDelete(employee._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    {employees.length === 0 && (
                        <tr>
                            <td colSpan="5">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;