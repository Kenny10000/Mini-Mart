// var names = ['kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny','kenny']
// console.log(names);
// show.innerHTML = (names);

// var ages = [32, 435, 56, 56, 56, 56, 32, 23, 2, 32, 3, 2, 23]
// console.log(ages);

// var student = ['kenny', 43, 'light', 'single', 100000]
// console.log(student);

// var student = ['bright', 43, 'light', 'single', 100000]
// console.log(student);

// var student = ['enoch', 43, 'light', 'single', 100000]
// console.log(student);

// var names = ['kenny','bright','enoch','tayo','jdbn3','olu','kdh3hd','dwddeded']
// console.log(names[7]);

// var names = ['kenny','bright','enoch','tayo','jdbn3','olu','kdh3hd']
// names.pop()
// names.shift()
// names.push('hello')
// names.unshift('jioo')
// console.log(names); 


// function addItems(){
//     if (input.value === ''){
//         dis.innerHTML = "Please input your product."
//     }else{
//         cart.push(input.value)
//         document.getElementById('input').value = ''
//         console.log(cart);
//         show.innerHTML = ""
//         for(i=0; i < cart.length; i++) {
//             show.innerHTML +=` 
//             <table>
//             <tr>
//               <td>${i+1}. </td>
//               <td> ${cart[i]}</td>
//               <td>
//              <button class="btn btn-sm btn-danger mx-2 my-2 bt" onclick="deleteFirst()">Delete</button>
//              <button class="btn btn-sm btn-danger mx-2 my-2 bt" onclick="deleteLast()">Delete last</button>
//               </td>
//             </tr>
//           </table>
//             `
//         }
//     }
//}

var cart = []

function addItems(){
  if (input.value === ''){
      dis.innerHTML = "Please input your product."
      dis.style.display = "block"
  }else{
      cart.push(input.value)
      document.getElementById('input').value = ''
      console.log(cart);
      show.innerHTML = ""
      for(i=0; i < cart.length; i++) {
          show.innerHTML +=` 
          <table>
          <tr>
            <td>${i+1}. </td>
            <td> ${cart[i]}</td>
            <td> <i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteItem()"></i></td> 
          </tr>
        </table>
          `
      }
  }
 }
function deleteItem(){
  cart.splice(cart-1,1)
  show.innerHTML = cart 
  show.innerHTML ="" 
  for(i=0; i < cart.length; i++){
    show.innerHTML +=`
    <table>
    <tr>
      <td>${i+1}. </td>
      <td> ${cart[i]}</td>
      <td> <i class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteItem()"></i></td> 
    </tr>
  </table>
    `
  }
  }
  
function addFirst(){
  if (input.value === ''){
    dis.innerHTML = "Please input your product."
    dis.style.display = "block"
}else
  cart.unshift(input.value)
  show.innerHTML = cart 
  show.innerHTML =""
  for(i=0; i < cart.length; i++){
    show.innerHTML +=`
    <table>
    <tr>
      <td>${i+1}. </td>
      <td> ${cart[i]}</td>
    </tr>
  </table>
    `
  }
}


function deleteFirst(){
  if(show.innerHTML === ''){
    dis.innerHTML = "No products to be deleted"
    dis.style.display = "block"
}
else if(cart.shift(input.value)){ 
  show.innerHTML = cart 
  show.innerHTML =""
  suc.innerHTML = "First item deleted successfully"
  suc.style.display = "block"
}
  for(i=0; i < cart.length; i++){
    show.innerHTML +=`
    <table>
    <tr>
      <td>${i+1}. </td>
      <td> ${cart[i]}</td>
    </tr>
  </table>
    `
  }
}



function deleteLast(){
//   if(show.innerHTML === ''){
//     dis.innerHTML = "No products to be deleted"
// }else{
//   cart.pop(input.value)
//   show.innerHTML = cart 
//   show.innerHTML =""
//   // suc.innerHTML = "Last item deleted successfully"
// }
if(show.innerHTML === ''){
  dis.innerHTML = "No products to be deleted"
  dis.style.display = "block"
}
else if(cart.pop(input.value)){ 
show.innerHTML = cart 
show.innerHTML =""
suc.innerHTML = "Last item deleted successfully"
suc.style.display = "block"
}
  for(i=0; i < cart.length; i++){
    show.innerHTML +=`
    <table>
    <tr>
      <td>${i+1}. </td>
      <td> ${cart[i]}</td>
    </tr>
  </table>
    `
  }
}

function deleteAll(){
  //   if(show.innerHTML === ''){
  //     dis.innerHTML = "No products to be deleted"
  // }else{
  //   cart.pop(input.value)
  //   show.innerHTML = cart 
  //   show.innerHTML =""
  //   // suc.innerHTML = "Last item deleted successfully"
  // }
  if(show.innerHTML === ''){
    dis.innerHTML = "No products to be deleted"
  }
  else if(cart.splice(input.value)){ 
  show.innerHTML = cart 
  show.innerHTML =""
  suc.innerHTML = "All items deleted successfully"
  suc.style.display = "block"
  }
    for(i=0; i < cart.length; i++){
      show.innerHTML +=`
      <table>
      <tr>
        <td>${i+1}. </td>
        <td> ${cart[i]}</td>
      </tr>
    </table>
      `
    }
  }
// function delet(index){
// // alert(index)
// cart.splice(index,1)
// addItems()
// }