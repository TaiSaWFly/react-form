import React from "react";
import "./mainStyles.scss";
import { useAppSelector } from "../../../hoc/hooks/reduxHooks";
import Button from "../../common/Button";
import { useHistory } from "react-router-dom";

const MainPage: React.FC = () => {
    const history = useHistory();
    const formData = useAppSelector((state) => state.formData.entities);

    const redirect = () => {
        history.push("/form/edit");
    };

    return (
        <div className="main">
            <div className="main_title">
                {formData ? "Данные Формы" : "Форма пока не заполнена"}
            </div>

            {formData && (
                <div className="main_data">
                    <div>
                        <span>Фио: </span> {formData.name}
                    </div>
                    <div>
                        <span>E-mail: </span>
                        {formData.email}
                    </div>
                    <div>
                        <span>Тема: </span> {formData.subject}
                    </div>
                    <div>
                        <span>Сообщение: </span>
                        {formData.content}
                    </div>
                </div>
            )}

            <Button className="main_button" onClick={redirect}>
                {formData ? "Изменить данные" : "Заполнить форму"}
            </Button>
        </div>
    );
};

export default MainPage;
