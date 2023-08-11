import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: (e?: any) => void;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    isDisabled
}) => {
    return (
        <button onClick={onClick} disabled={isDisabled} className={className}>
            {children}
        </button>
    );
};

export default Button;
