
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async() => {
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
   return response.data;
})

export const addPost = createAsyncThunk("posts/addPost", async(postInfo) => {
   const response = await axios.post("https://jsonplaceholder.typicode.com/posts", postInfo);
   return { ...response.data, id: uuidv4() };
})


export const deletePost = createAsyncThunk("posts/deletePost", async(postId) => {
   await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
   return postId;
})

export const updatePost = createAsyncThunk("posts/updatePost", async ({id, updatedData}) => {
   const response = await axios.patch(
     `https://jsonplaceholder.typicode.com/posts/${id}`, updatedData
   );
   return response.data;
 });


 