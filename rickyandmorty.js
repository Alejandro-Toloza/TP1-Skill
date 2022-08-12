var url = 'https://rickandmortyapi.com/api/character';
        fetch(url, {method: 'GET'})
            .then( response => response.json() )
            .then( function(json) {
                
                var container = document.querySelector('.container')
                json.results.map(function(results) {
                    console.log(json)
                    container.innerHTML+=`
                        <div> <img src= `+ results.image +`> </div>
                        <div> `+ results.id +`  </div>
                        <div> `+ results.name +` </div>
                        <div> `+ results.species +` </div>
                    `
                })
                
            })
            

