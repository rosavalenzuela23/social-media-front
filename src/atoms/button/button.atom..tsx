import './button.css'

type ButtonProps = {
    buttonText?: string,
    children: React.ReactNode,
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className='atomic-button'>
            { children }
        </button>
    )
}