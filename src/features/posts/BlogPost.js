import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import { Link, useParams } from 'react-router-dom'


const BlogPost = () => {
    const { postId } = useParams()
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>
            <Link to={`/post/edit/${post.id}`}>Edit</Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date}/>
        </p>
    </article>
    )
}

export default BlogPost