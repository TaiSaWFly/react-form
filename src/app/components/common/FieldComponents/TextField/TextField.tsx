import React from "react";
import "./textFieldStyle.scss";

interface TextFieldProps {
    name: string;
    label: string;
    type?: string;
    value: string;
    error: string | undefined;
    isDirty: boolean;
    isInvalid: boolean;
    isSubmitted: boolean;
    onChange: (newValue: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
    name,
    label,
    value = "",
    type = "text",
    error,
    isDirty,
    isInvalid,
    isSubmitted,
    onChange
}) => {
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange(target.value);
    };

    const setClassNameDirty = () => {
        if (isDirty) return "dirty ";
        if (!isDirty && value !== "") return "dirty ";
        return "";
    };
    const setClassNameInvalid = () => (isInvalid ? "invalid " : "");
    const setClassNameValid = () => (!isInvalid && isSubmitted ? "valid" : "");

    return (
        <div className="text_field__wrap">
            <input
                className={`text_field ${setClassNameDirty()} ${setClassNameInvalid()} ${setClassNameValid()}`}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
            />

            <label htmlFor={name} className="text_field__label">
                {label}
            </label>

            <div className="text_field__error">{error}</div>
        </div>
    );
};

export default TextField;
