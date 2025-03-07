import React, { useState, useEffect } from "react";
import UpdatePostModal from "../../Components/Modal/UpdatePostModal";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost, updatePost, deletePost } from "./postsSlice.js";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const PostsList = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    id:"",
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsData.posts);

  const [newPost, setNewPost] = useState({
    title: "", 
    body: "",
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = () => {
    dispatch(addPost(newPost)).then(() => {
      setNewPost({ title: "", body: "" });
      toast.success("Post added successfully");
    });
  };

  const handleShowModal = (post) => {
    console.log(post);
    setCurrentPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdatePost = () => {
    
    const updatedPostData = {title: currentPost.title, body: currentPost.body};
    dispatch(updatePost({id: currentPost.id, updatedData: updatedPostData})).finally(() => {
      setShowModal(false);
      toast.success("Post has been updated successfully");
    });
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
    toast.success("Post deleted successfully");
  };

  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts &&
                posts.map((post) => (
                  <div className="card post-item" key={post.id}>
                    <div className="card-body">
                      <h5>
                        {post.id}
                      </h5>
                      <h5> {post.title} </h5>
                      <p className="card-text">{post.body}</p>
                      <div className="postControlButtons">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            handleShowModal(post);
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Update
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDeletePost(post.id)}>
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-lg-4">
              <div className="add-post-form">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Title"
                  value={newPost.title}
                  onChange={(e) => {
                    setNewPost({ ...newPost, title: e.target.value });
                  }}
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Body"
                  rows="4"
                  value={newPost.body}
                  onChange={(e) => {
                    setNewPost({ ...newPost, body: e.target.value });
                  }}
                />
                <button className="btn btn-success" onClick={handleAddPost}>
                  <FontAwesomeIcon icon={faPlus} /> Add Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpdatePostModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        currentPost={currentPost}
        handleChangeData={setCurrentPost}
        handleUpdatePost={handleUpdatePost}
      />

      <ToastContainer />
    </>
  );
};

export default PostsList;
