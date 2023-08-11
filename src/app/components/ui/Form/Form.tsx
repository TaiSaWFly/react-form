import React from "react";
import "./formStyles.scss";
import Button from "../../common/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFormData } from "../../../../ts/models/FormData";
import TextField from "../../common/FieldComponents/TextField/TextField";
import { initialFormData, initialSelectData } from "../../../data/defaultData";
import SelectField from "../../common/FieldComponents/SelectField/SelectField";
import TextareaField from "../../common/FieldComponents/TextareaField/TextareaField";
import { useActions } from "../../../hoc/hooks/useActions";
import { useHistory } from "react-router-dom";

interface FormProps {
    data?: IFormData | null;
}

const Form: React.FC<FormProps> = ({ data }) => {
    const initialFormFields = data || initialFormData;
    const history = useHistory();
    const { setFormData } = useActions();

    const { handleSubmit, reset, control } = useForm<IFormData>({
        values: initialFormFields
    });

    const onSubmitForm: SubmitHandler<IFormData> = (data) => {
        if (!data) return;
        setFormData(data);
        history.push("/");
    };

    const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        reset(initialFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="form_group">
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: "Представьтесь пожалуйста",
                        minLength: {
                            value: 3,
                            message: "Не меньше 3 символов"
                        }
                    }}
                    render={({
                        field: { value, onChange, name },
                        fieldState: { error, isDirty, invalid },
                        formState: { isSubmitted }
                    }) => (
                        <TextField
                            name={name}
                            label="Представьтесь пожалуйста"
                            value={value}
                            onChange={onChange}
                            error={error?.message}
                            isDirty={isDirty}
                            isInvalid={invalid}
                            isSubmitted={isSubmitted}
                        />
                    )}
                />
            </div>

            <div className="form_group">
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: "Введите e-mail",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email введен некорректно"
                        }
                    }}
                    render={({
                        field: { value, onChange, name },
                        fieldState: { error, isDirty, invalid },
                        formState: { isSubmitted }
                    }) => (
                        <TextField
                            name={name}
                            label="Введите ваш e-mail"
                            value={value}
                            onChange={onChange}
                            error={error?.message}
                            isDirty={isDirty}
                            isInvalid={invalid}
                            isSubmitted={isSubmitted}
                        />
                    )}
                />
            </div>

            <div className="form_group">
                <Controller
                    control={control}
                    name="subject"
                    rules={{
                        required: "Выберите тему"
                    }}
                    render={({
                        field: { value, onChange },
                        fieldState: { error, isDirty, invalid },
                        formState: { isSubmitted }
                    }) => (
                        <SelectField
                            className="form_select"
                            label="Тема сообщения"
                            options={initialSelectData}
                            value={value}
                            onChange={onChange}
                            error={error?.message}
                            isDirty={isDirty}
                            isInvalid={invalid}
                            isSubmitted={isSubmitted}
                        />
                    )}
                />
            </div>

            <div className="form_group">
                <Controller
                    control={control}
                    name="content"
                    rules={{
                        required: "Введите сообщение",
                        minLength: {
                            value: 10,
                            message: "Введите не меньше 10 символов"
                        }
                    }}
                    render={({
                        field: { value, onChange, name },
                        fieldState: { error, isDirty, invalid },
                        formState: { isSubmitted }
                    }) => (
                        <TextareaField
                            name={name}
                            placeholder="Например: разработать логотип для бренда рюкзаков"
                            label="Введите сообщение"
                            value={value}
                            onChange={onChange}
                            error={error?.message}
                            isDirty={isDirty}
                            isInvalid={invalid}
                            isSubmitted={isSubmitted}
                        />
                    )}
                />
            </div>

            <div className="form_actions">
                <Button className="form_actions__reset" onClick={resetForm}>
                    сбросить
                </Button>
                <Button className="form_actions__submit">отправить</Button>
            </div>
        </form>
    );
};

export default Form;
