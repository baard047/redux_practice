import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";
import { fetchPosts } from "../redux/actions";
import { Loader } from "./loader";

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.loading);

    if( loading ) {
        return <Loader/>
    }

    if( !posts.length ) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}>
            Load posts
        </button>
    }

    return posts.map(post => <Post post={ post } key={ post.id }/>)
};

export default FetchedPosts;