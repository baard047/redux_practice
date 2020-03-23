import React from 'react'
import { connect } from 'react-redux'
import Post from "./post";

const Posts = ({ syncPosts }) => {
    if( !syncPosts.length ) {
        return <p className="text-center">No post's yet</p>
    }

    return syncPosts.map(post => <Post post={ post } key={ post.id }/>)
};

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
};

export default connect(mapStateToProps, null)(Posts);