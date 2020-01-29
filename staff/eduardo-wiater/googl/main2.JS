var search = document.querySelector(".search");
search.addEventListener('submit', function(event){
    event.preventDefault();
    var query = this.query.value;

    googl( query,function(){
        var list = document.querySelector('ul');   // creo el contenedor q estará en ul
        list.innerHTML = '';                       // vacio el contenedor por cada llamada

        results.forEach(function(result){
            var item = document.createElement('li');     // voy creando los elementos de la lista
            var title = document.createElement('h3');
            title.innerText = result.title;               // ??  Le meto el texto
            var description = document.createElement('p');
            description.innerText = result.description;

            var link = document.createElement("a");
            link.target = _blank;
            link.href = result.time;
            link.append(title);
            item.append(link);
            list.append(item);                             
        });

    });
});