import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const API = "http://localhost:5000/api/employees";

function App() {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    // READ employees
    const fetchEmployees = async () => {
        const response = await axios.get(API);
        setEmployees(response.data);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    // CREATE and UPDATE
    const saveEmployee = async (employee) => {
        if (editingEmployee) {
            await axios.put(`${API}/${editingEmployee._id}`, employee);
            setEditingEmployee(null);
        } else {
            await axios.post(API, employee);
        }

        fetchEmployees();
    };

    // DELETE
    const deleteEmployee = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await axios.delete(`${API}/${id}`);
            fetchEmployees();
        }
    };

    return (
        <div className="container">
            <h1>Employee Management System</h1>

            <EmployeeForm
                onSave={saveEmployee}
                editingEmployee={editingEmployee}
            />

            <EmployeeList
                employees={employees}
                onEdit={setEditingEmployee}
                onDelete={deleteEmployee}
            />
        </div>
    );
}

export default App;