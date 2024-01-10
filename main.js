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


var cart = []
function addItems(){
    if (input.value === ''){
        dis.innerHTML = "Please input your product."
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
            </tr>
          </table>
            `
        }
    }
}

function addFirst(){
  if (input.value === ''){
    dis.innerHTML = "Please input your product."
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
