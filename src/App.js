import { useState } from "react";
import BookCreate from './components/BookCreate'
import './index.css'


function App() {
    const [books, setBooks] = useState([]);


    const createBook = (title) => {
        const updatedBooks = [
            ...books, { id: 123, title }
        ];
        setBooks(updatedBooks);
    };

    return <div>
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;

