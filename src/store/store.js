import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../feature/auth/authSlice"


const store = configureStore({

    reducer: {
        auth: authReducers
    }

})

// export store

export default store