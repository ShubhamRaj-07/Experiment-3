import { useState } from "react";
import "./Books.css";

function Books1() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien" }
  ]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const addBook = () => {
    if (title.trim() === "" || author.trim() === "") {
      alert("Please enter both Title and Author!");
      return;
    }

    const newBook = { id: Date.now(), title, author };
    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
  };

  const removeBook = (idToRemove) => {
    setBooks(books.filter((book) => book.id !== idToRemove));
  };

  const filteredBooks = books.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div className="books-app">
      <h1>Library Management System</h1>

      <div className="books">
        <input
          className="search-input"
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="input-row">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input"
          />
          <button className="add-btn" onClick={addBook}>Add Book</button>
        </div>
      </div>

      <div className="list-wrapper">
        <h3>Library Books</h3>
        {filteredBooks.length > 0 ? (
          <div className="book-list">
            {filteredBooks.map((book) => (
              <div className="book-card" key={book.id}>
                <div className="book-info">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-author">by {book.author}</p>
                </div>
                <button className="remove-btn" onClick={() => removeBook(book.id)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-books">No books found</p>
        )}
      </div>
    </div>
  );
}

export default Books1;
