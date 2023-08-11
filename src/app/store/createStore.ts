import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formDataReduser, { formDataActions } from "./slices/formData.slice";

const rootReducer = combineReducers({
    formData: formDataReduser
});

const store = configureStore({
    reducer: rootReducer
});

export const rootActions = {
    ...formDataActions
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
