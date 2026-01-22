import './post.css'
import type { Post } from "../../shared/model/user.model";
import Button from '../../atoms/button/button.atom.';

type PostProps = {
    post: Post
}

export default function PostMolecule({ post }: PostProps) {
    return (
        <div className='post-molecule'>
            <h2>{post.creatorUsername || "No name"}</h2>
            <p>{post.message}</p>
            <div>
                <Button buttonText='Me gusta' >
                    <i className="bi bi-hand-thumbs-up"></i>
                    <p>{0}</p>
                </Button>
                <Button buttonText='No me gusta'> 
                    <i className="bi bi-hand-thumbs-down"></i>
                    <p>{0}</p>
                </Button>
                
            </div>
        </div>
    )
}