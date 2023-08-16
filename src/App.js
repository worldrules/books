import { useState } from "react";
import BookCreate from './components/BookCreate'
import './index.css'


function App() {
    const [books, setBooks] = useState([]);


    const createBook = (title) => {
        console.log('need to add book with :', books, title)
    };

    return <div>
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;

