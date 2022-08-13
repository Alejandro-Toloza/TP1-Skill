var url = 'https://rickandmortyapi.com/api/character';
        fetch(url, {method: 'GET'})
            .then( response => response.json() )
            .then( function(json) {
                
                var container = document.querySelector('.container')
                json.results.map(function(results) {
                    console.log(json)
                    container.innerHTML+=`
                    <tr>

                        <div> <img src= `+ results.image +`> </div>
                        <h2> `+ results.id +`  </h2>
                        <h3> `+ results.name +` </h3>
                        <h4> `+ results.species +` </h4>

                     </tr>   
                    `
                })
                
            })
            

