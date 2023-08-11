import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFormData } from "../../../ts/models/FormData";

interface IFormDataSlice {
    entities: IFormData | null;
}

const initialState: IFormDataSlice = {
    entities: null
};

const formDataSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<IFormData>) => {
            state.entities = action.payload;
        }
    }
});

const { actions, reducer: formDataReduser } = formDataSlice;

export const formDataActions = actions;
export default formDataReduser;
