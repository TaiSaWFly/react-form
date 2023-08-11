import React from "react";
import "./textareaField.scss";

interface TextareaFieldProps {
    name: string;
    label: string;
    value: string;
    placeholder: string;
    error: string | undefined;
    isDirty: boolean;
    isInvalid: boolean;
    isSubmitted: boolean;
    onChange: (newValue: string) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
    name,
    label,
    value = "",
    error,
    placeholder,
    isDirty,
    isInvalid,
    isSubmitted,
    onChange
}) => {
    const handleChange = ({
        target
    }: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <div className="textarea_field__wrap">
            <textarea
                className={`textarea_field ${setClassNameDirty()} ${setClassNameInvalid()} ${setClassNameValid()}`}
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            />

            <label htmlFor={name} className="textarea_field__label">
                {label}
            </label>

            <div className="textarea_field__error">{error}</div>
        </div>
    );
};

export default TextareaField;
