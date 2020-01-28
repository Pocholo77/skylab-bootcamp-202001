var search = document.querySelector('form');
var container = document.createElement('div');
var ul = document.createElement('ul');
container.appendChild(ul);

search.addEventListener('submit',function(event){
    event.preventDefault();
    
    var query = this.query.value;
    
    googl(query,function(results){
        results.forEach(function(result){
            var li = document.createElement('li');
            var title = document.createTextNode(result.title);
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            var description = document.createTextNode(result.description);
            h3.appendChild(title);
            p.appendChild(description);
            ul.appendChild(li).appendChild(h3).appendChild(p);
        });
        
    });

    search.insertAdjacentElement('afterend', container);


})