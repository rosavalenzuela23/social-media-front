import { useEffect, useState } from 'react'
import './App.css'
import type { Post } from '../../shared/model/user.model';

function App() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://127.0.0.1:3000/api/posts/me/', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data: Post[]) => setPosts(data))
    }, [])

    return (
        <div>
            <h1>
                Home page
            </h1>

            {posts.map((post) => {
                return (
                    <div key={post.date}>
                        <h2>{post.creatorUuid}</h2>
                        <p>{post.message}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default App
