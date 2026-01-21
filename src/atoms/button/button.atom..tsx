import './button.css'

type ButtonProps = {
    buttonText: string
}

export default function Button({ buttonText }: ButtonProps) {
    return (
        <button className='atomic-button'>
            {buttonText || "Button"}
        </button>
    )
}