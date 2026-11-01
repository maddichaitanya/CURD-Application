import { useEffect, useState } from "react";

function EmployeeForm({ onSave, editingEmployee }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    useEffect(() => {
        if (editingEmployee) {
            setForm({
                name: editingEmployee.name,
                email: editingEmployee.email,
                department: editingEmployee.department,
                salary: editingEmployee.salary
            });
        } else {
            setForm({
                name: "",
                email: "",
                department: "",
                salary: ""
            });
        }
    }, [editingEmployee]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...form,
            salary: Number(form.salary)
        });

        if (!editingEmployee) {
            setForm({
                name: "",
                email: "",
                department: "",
                salary: ""
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Employee Name"
                value={form.name}
                onChange={handleChange}
                required
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />

            <input
                name="department"
                placeholder="Department"
                value={form.department}
                onChange={handleChange}
                required
            />

            <input
                name="salary"
                type="number"
                placeholder="Salary"
                value={form.salary}
                onChange={handleChange}
                required
                min="0"
            />

            <button type="submit">
                {editingEmployee ? "Update Employee" : "Add Employee"}
            </button>
        </form>
    );
}

export default EmployeeForm;