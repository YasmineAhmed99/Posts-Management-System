
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice.js"; 

export default configureStore({
    reducer: {
        postsData: postsReducer
    }
});