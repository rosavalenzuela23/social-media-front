import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom";

const apiUrl = "https://127.0.0.1:3000/api";

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const response = await fetch(`${apiUrl}/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            alert("Error al intentar crear el usuario");
            return;
        }

        navigate("/login");
    }

    return (
        <div>
            <h1>
                Register page
            </h1>
            <div>
                {user.username}
                {user.password}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    required
                    type="email" placeholder="inicio de sesion" />
                <input
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    required
                    type="password" placeholder="contraseña" />
                <button>Iniciar sesion</button>
            </form>
        </div>
    )
}