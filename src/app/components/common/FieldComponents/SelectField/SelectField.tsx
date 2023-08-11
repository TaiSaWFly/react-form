import React, { useEffect, useRef, useState } from "react";
import "./selectField.scss";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "../../../../../ts/types/SelectOption";

interface SelectFieldProps {
    className: string;
    options: SelectOption[];
    label: string;
    value: string;
    error: string | undefined;
    isDirty: boolean;
    isInvalid: boolean;
    isSubmitted: boolean;
    onChange: (newValue: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
    className,
    options,
    label,
    value,
    error,
    isDirty,
    isInvalid,
    isSubmitted,
    onChange
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isTouched, setIsTouched] = useState(false);

    const handleClickOutside = (event: Event) => {
        ref.current &&
            !ref.current.contains(event.target as Node) &&
            setIsTouched(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const getValue = (value: string) =>
        value ? options.find((option) => option.value === value) : null;

    const handleChange = (newValue: SingleValue<SelectOption>) => {
        onChange(newValue ? newValue.value : "");
    };

    const setClassNameDirty = () => {
        if (isDirty) return "dirty ";
        if (!isDirty && value !== "") return "dirty ";
        return "";
    };
    const setClassNameInvalid = () => (isInvalid ? "invalid " : "");
    const setClassNameValid = () => (!isInvalid && isSubmitted ? "valid" : "");
    const setClassNameTouched = () => (isTouched ? "touched " : "");

    return (
        <div
            ref={ref}
            onClick={() => setIsTouched(true)}
            className={`select_field ${setClassNameDirty()} ${setClassNameInvalid()} ${setClassNameValid()} ${setClassNameTouched()}`}
        >
            <Select
                className="select_field__container"
                classNamePrefix={className}
                options={options}
                maxMenuHeight={185}
                isSearchable={false}
                value={getValue(value)}
                onChange={handleChange}
            />

            <div className="select_field__label">{label}</div>
            <div className="select_field__error">{error}</div>
        </div>
    );
};

export default SelectField;
