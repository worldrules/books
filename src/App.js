import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css'


function App() {
    const [books, setBooks] = useState([]);


    const createBook = (title) => {
        const updatedBooks = [
            ...books, {
                id: Math.round(Math.random() * 9999),
                title
            },
        ];
        setBooks(updatedBooks);
    };

    return <div>
        {books.length}
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;

