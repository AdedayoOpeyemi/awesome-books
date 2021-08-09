saveList = (bookList) => {
  localStorage.setItem('BookList', JSON.stringify(bookList))
}

getList = () => {
  return JSON.parse(localStorage.getItem('BookList'))
}

export { saveList, getList }