import { useEffect, useState } from 'react'
import './App.css'
import type { Post } from '../../shared/model/user.model';
import Input from '../../atoms/input/input.atom';
import PostMolecule from '../../molecules/post/post.molecule';

function App() {
    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;


        fetch('https://127.0.0.1:3000/api/posts/me/', {
            method: 'GET',
            credentials: 'include',
            signal,
        }).then(response => response.json()).then((data: Post[]) => setPosts(data))

        return () => {
            abortController.abort("Page change");
        }
    }, []);

    async function sendMessage() {
        const response = await fetch('https://127.0.0.1:3000/api/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                content: {
                    value: message
                }
            }),
        });

        if (!response.ok) {
            alert("Error al intentar enviar el mensaje");
            return;
        }

        setMessage('');
    }

    return (
        <div>
            <h1>
                Home page
            </h1>

            <form action={sendMessage}>
                <input
                    type="text" placeholder="Send message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                />
                <button>Send</button>
            </form>

            {posts.map((post) => {
                return (
                    <PostMolecule post={post} />
                )
            })}

        </div>
    )
}

export default App
