$(document).ready(() => {
  let getData = () => {
    let obj = {
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: "json",
      timeout: 2000,
      success : (data) => {
        $.each(data, (index, item) => {
          $("#data").append("<li>ID: "+ String(item.id)+" | Title: "+ item.title+" | <button id= \"edt"+String(item.id)+"\">Edit</button>  <button id= \"del"+String(item.id)+"\">Delete</button></li>")
        })
      },
      error: () => {
        alert("Error loading data")
      },
      complete: () => {
        console.log("GET request complete")
      },
      async: false
    }
    $.ajax(obj)
  }

  let deleteData = (id) => {
    let obj = {
      type: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/"+id,
      dataType: "json",
      timeout: 2000,
      success : () => {
        console.log("Deleted id : "+id)
      },
      error: () => {
        alert("Error deleting id : "+id)
      }
    }
    $.ajax(obj)
  }

  let putData = (id) => {
    let obj = {
      type: "PUT",
      url: "https://jsonplaceholder.typicode.com/todos/"+id,
      data: {title: "updated Title"},
      dataType: "json",
      timeout: 2000,
      success : () => {
        console.log("Edited id : "+id)
      },
      error: () => {
        alert("Error Updating id : "+id)
      }
    }
    $.ajax(obj)
  }

  getData()

  $("button").on("click", (event)=>{
    let btnId = event.target.id
    id = btnId.charAt(3)

    if(btnId.charAt(0) == 'e'){
      putData(id)
    }else if (btnId.charAt(0) == 'd'){
      deleteData(id)
    }
  })
})