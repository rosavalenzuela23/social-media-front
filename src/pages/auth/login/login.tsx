import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom";

const apiUrl = "https://127.0.0.1:3000/api";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const response = await fetch(`${apiUrl}/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            alert("Error al intentar iniciar sesion");
            return;
        }

        navigate("/");
    }

    return (
        <div>
            <h1>
                Login page
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