import React from "react";
import { db } from "../firebase"
import { collection, addDoc} from "firebase/firestore"

export default function AddTodo() {
    const [title, setTitle] = React.useState("");

        const handleSubmit = async (e) => {
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection(db,'todos'), {
                title,
                completed: false,
            });
            setTitle("");
            
        }
    }

    return (
        <div className='addcontainer'>
        <form onSubmit={handleSubmit}>
            <div className="input_container">                
                <input
                type="text"
                placeholder="Please enter Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input_style"
            />
            </div>
            <div className="btn_container">
                <button>add</button>
            </div>
        </form>
        </div>
    );


}