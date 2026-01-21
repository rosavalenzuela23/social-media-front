import Button from "../../atoms/button/button.atom.";
import Input from "../../atoms/input/input.atom";
import './login-form.molecule.css';

export default function LoginForm() {
    return (
        <form action="">
            <Input type="email" required={true} placeholder="amosai" />
            <Input type="password" required={true} />
            <Button buttonText="Login" />
        </form>
    )
}