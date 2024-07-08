const Button = ({
    text,
    onClick,
    color = "primary",
    size,
    flat,
    disabled,
    children,
    className,
    type,
}: ButtonProps) => {
    return (
        <button
            className={`${
                flat
                    ? `hover:bg-${color}/10 shadow-none text-${color} disabled:bg-${color}/20 active:bg-${color}/30 focus:bg-${color}/30 `
                    : `bg-${color} hover:bg-${color}/85 hover:shadow-${color}/40 hover:shadow-xl text-white disabled:bg-${color}-50 disabled:shadow-none`
            } py-2 px-3 rounded-lg transition-all duration-50 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 flex gap-2 items-center justify-center${
                size === "lg" ? " text-2xl" : ""
            }${size === "sm" ? " text-sm" : ""} ${className ? className : ""}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            {children}
        </button>
    );
};

export default Button;

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    color?: string;
    size?: "lg" | "sm";
    flat?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
}
