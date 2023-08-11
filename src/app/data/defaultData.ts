import { IFormData } from "../../ts/models/FormData";
import { SelectOption } from "../../ts/types/SelectOption";

export const initialFormData: IFormData = {
    name: "",
    email: "",
    subject: "",
    content: ""
};

export const initialSelectData: SelectOption[] = [
    {
        value: "Тема 1",
        label: "Тема 1"
    },
    {
        value: "Тема 2",
        label: "Тема 2"
    },
    {
        value: "Тема 3",
        label: "Тема 3"
    },
    {
        value: "Тема 4",
        label: "Тема 4"
    }
];
