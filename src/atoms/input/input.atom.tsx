import './input.css'

type InputProps = {
    type: "text" | "password" | "email",
    required: boolean,
    placeholder?: string,
}


export default function Input({ type, required, placeholder }: InputProps) {
    return (
        <input
            placeholder={placeholder || ""}
            type={type}
            required={required}
            className="atomic-input"
        />
    )
}