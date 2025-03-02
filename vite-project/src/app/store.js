
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/PostsSlice"; 

export default configureStore({
    reducer: {
        postsData: postsReducer
    }
});