//first copy the existing data of localStorage in a new array
let getData = window.localStorage.getItem("library")
if(getData != null)
getData = JSON.parse(getData)
else
getData = []
function Book(title,author,pages,read){
this.title = title
this.author = author
this.pages = pages
this.read = read
}
const addObjects = (title,author,pages,read)=>{
    if(read){
      read = "Read"
    }
    else
    read = "Not Read"
    const instanceOfBook = new Book(title,author,pages,read)
    getData.push(instanceOfBook)
    var storedInLocal = window.localStorage;
    let myLibrary = JSON.stringify(getData);
    storedInLocal.setItem("library",myLibrary);
    createTable();
}
let theFormData = document.getElementById("bookInfo")
let onClick  = ()=>{
    let title = theFormData.elements["title"].value
    let author = theFormData.elements["author"].value
    let pages = theFormData.elements["pages"].value
    let read = document.querySelector(".form-check-input:checked")
    let checked = false
    if(read)
    checked =true
    addObjects(title,author,pages,checked)
}

//For the submit button

document.getElementById("bookInfo").addEventListener('submit',function(event){
    event.preventDefault()
    onClick();
    parent.document.getElementById("bookInfo").reset()
    document.getElementById("formPopupBg").classList.remove("isVisible")
})

const createTable = ()=>{
    let data = ''
    let library = window.localStorage.getItem("library");
    library = JSON.parse(library)
    if(library != null){
    library.map((item,i)=>{
        data += '<tr>'
        for(x in item){
            data += `<td>${item[x]}</td>`
        }
        data += `<td><button onclick="deleteItem(${i})" >Delete</button></td>
                </tr>`
    })
    let theTable = `<table>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Read</th>
    </tr>
    <tr>
      ${data}
    </tr>
  </table>`
  document.getElementById("author").innerHTML = theTable
    }
}
//For delete Operation
var deleteItem = (bookValue)=>{
  //delete the item from the array where index is bookValue(bookvalue is set while table creation)
  //copy and concat the array
  let library = window.localStorage.getItem("library");
  library = JSON.parse(library)
  let preBooks = library.slice(0,bookValue)
  let postBooks = library.slice(bookValue+1)
  let newLibrary = preBooks.concat(postBooks)
  newLibrary = JSON.stringify(newLibrary)
  window.localStorage.setItem("library",newLibrary);
  // console.log(allObjects)
  createTable();
}
createTable();
   


