import React, { useEffect } from "react";
import Form from "../../ui/Form/Form";
import "./editFormPage.scss";
import { useAppSelector } from "../../../hoc/hooks/reduxHooks";
import { useHistory } from "react-router-dom";

const EditFormPage: React.FC = () => {
    const history = useHistory();
    const formData = useAppSelector((state) => state.formData.entities);

    useEffect(() => {
        formData === null && history.push("/form");
    }, []);

    return (
        <div className="edit_form_page">
            <div className="edit_form_page__wrap">
                <div className="edit_form__title">Изменить данные</div>

                <Form data={formData} />
            </div>
        </div>
    );
};

export default EditFormPage;
