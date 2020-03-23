import React from 'react';
import PostForm from "./components/post_form";
import Posts from "./components/posts";
import FetchedPosts from "./components/fetched_posts";

function App() {
  return (
    <div className="container pt-3">
        <div className="row">
            <div className="col">
                <PostForm/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>sync posts</h2>
                <Posts />
            </div>
            <div className="col">
                <h2>async posts</h2>
                <FetchedPosts />
            </div>
        </div>
    </div>
  );
}

export default App;
