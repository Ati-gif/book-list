// import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import BookForm from './BookForm';
import Button from './Button'

function App() {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(true)
  const [loading, setLoading] = useState(true)
  // the first param is a function that will be called when 
  // component mounts... (for know)
  // the [] as the argument make this only gets when components
  useEffect(()=>{
    console.log('useEffect called')
    getBooks()
  },[])

  
  const getBooks = async () => {
     console.log('before axios call with 3 second delay')
     let response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
     console.log('after axios call')
     console.log('response:', response)
     console.log('response.data:',  response.data)
     console.log('response.data.data:',  response.data.data)
     setBooks(response.data.data)
     setLoading(false)
  }


  const deleteBook = (isbn) => {
    // Note: axios call here... skipping over that for now
    // down the road we would want to remove from the database
    console.log('deleteBook clicked isbn:', isbn)
    let newBooks = books.filter( book=>{
      return book.isbn !== isbn
    })

    setBooks(newBooks)
  }
  const renderBooks = () => {
    if(loading){
      return <p>Loading books please wait</p>
    } 
    return books.map( book => {
      return (
        <div key={book.isbn}>
          Title: {book.title}: <p></p> Author: {book.author}:<p></p> Genre: {book.genre}<p></p> Publisher: {book.publisher}<p></p> Published:{book.published}<p></p> Isbn: {book.isbn}<p></p>  Description: {book.description}
          <p>
            <Button text='edit'></Button>
            <Button text='delete' onClick={()=> deleteBook(book.isbn)}></Button>
            </p>
        </div>
      )
    })
  }
  const addBook = (book) =>{
    console.log(book)
    setBooks([book, ...books ])
  }

  console.log('about to render to DOM')
  return (
    <div className="App">
      <Button 
       text={showForm ? "hide form" : "show form"} 
       onClick={()=> setShowForm(!showForm)}>
      </Button>
      { showForm && <BookForm addBook={addBook} /> }
      <h1>Books</h1>
      {renderBooks()}
    </div>
  );
}

export default App;