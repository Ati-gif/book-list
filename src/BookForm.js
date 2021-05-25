import { useState } from 'react'
import Button from './Button'
const BookForm = (props) => {
    const [title, set_title] = useState('')
    const [author, set_author] = useState('')
    const handleSubmit = (event) => {
        // this stops page from reloading, which I don't want to happen
        // because it will reset my state
        event.preventDefault()
        console.log('submit')
        console.log(title)
        console.log(author)
        let newBook = {isbn: Math.random(), title:title, author:author}
        props.addBook(newBook)
      
    }
    return (
      <div>
          <h1>Book List</h1>
          <form onSubmit={handleSubmit}>
              <p>Title</p>
              <input 
                value={title}
                onChange={(e)=> set_title(e.target.value)} 
              />
              <p>Author</p>
              <input value={author} 
               onChange={(e)=> set_author(e.target.value)}
              />
              <button type="submit" text='add'>Submit</button>
          </form>
      </div>
    )
}
export default BookForm