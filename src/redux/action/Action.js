import { REGISTRATION, USER } from "./ActionTypes";


export const setUser = (data) => ({
    type: USER,
    payload: data,
});


export const setRegistration = (data) => ({
    type: REGISTRATION,
    payload: data,
});