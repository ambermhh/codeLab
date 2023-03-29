
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postData => {
                console.log(posts)
                setPosts(postData)
            })
    },[])

    return (
        <div className="PostList componentBox">
            {posts.map(post => (
                <div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.title}</p>
                <Link to={'/posts/'+post.id}>Read More...</Link></div>
            ))}
        </div>
    )
}

export default PostList