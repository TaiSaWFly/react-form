import React from "react";
import "./formPageStyles.scss";
import Form from "../../ui/Form/Form";

const FormPage: React.FC = () => {
    return (
        <div className="form_page">
            <div className="form_page__wrap">
                <div className="form_title">Форма для тебя</div>

                <Form />
            </div>
        </div>
    );
};

export default FormPage;
