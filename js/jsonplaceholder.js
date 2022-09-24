let url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            
const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
         body+=`<tr>
         <td>${data[i].id}</td>
         <td>${data[i].name}</td>
         <td>${data[i].email}</td>
         <td>${data[i].phone}</td>
         <td>${data[i].address.city}</td>
         <td>${data[i].company.name}</td>
         </tr>`
        }
     document.getElementById('data').innerHTML = body
}