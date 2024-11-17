// Make this code type safe
// Tips: Use generics in getNextId, use enums for books.status

const books = [
  { id: 1, title: "Lion King", status: "done", completedOn: new Date("2023-12-26") },
  { id: 2, title: "Hobbit", status: "in-progress" },
  { id: 3, title: "Don Quixote", status: "read" },
]

function addBookToLibrary(book) {
  const id = getNextId(books)

  const newBook = {
      id,
      title: book,
      status: "read",
  }
  books.push(newBook)
  return newBook
}

function getNextId(items) {
  return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newBook = addBookToLibrary("City of Bones")

console.log(JSON.stringify(newBook))