import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return <article>
    This is a book
  </article>
}


ReactDom.render(<BookList/>, document.getElementById('root'))