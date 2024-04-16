import { text } from "stream/consumers";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    color?: string;
    size?: string;
    flat?: boolean;
    disabled?: boolean;
}

const Button = ({
    text,
    onClick,
    color,
    size,
    flat,
    disabled,
}: ButtonProps) => {
    return (
        <button
            className={`
                ${
                    flat
                        ? `hover:bg-${color}/10 shadow-none text-${color} disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed `
                        : `bg-${color} hover:bg-${color}/85 hover:shadow-${color}/30 hover:shadow-md`
                } py-3 px-[18px]  rounded-lg
                ${color === "secondary" ? "text-white" : "text-black"}
                ${size === "lg" && "text-2xl"}
                ${size === "sm" && "text-sm"}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
