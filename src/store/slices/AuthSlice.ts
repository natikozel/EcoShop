import {createSlice} from "@reduxjs/toolkit";

const initialState = {
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {

        },
        logout(state) {

        },
    }
});

// export const {toggle} = AuthSlice.actions;
export default AuthSlice.reducer;