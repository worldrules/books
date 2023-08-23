import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        onCreate(title);
    };

    return (
        //keke
        <div className="book-create">
            <h3>Add a Book </h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create !</button>
            </form>
        </div>
    );

}

export default BookCreate