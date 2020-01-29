function createRegister(selector, callback) {
    var register = document.querySelector(selector)
    
    register.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = this.name.value;
        var surName = this.surname.value;
        var userName = this.username.value;
        var password = this.password.value;
        callback(name, surName, userName, password);
    });
    return register;
}
function createLogin(selector, callback) {
    var login = document.querySelector(selector);
    login.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = this.username.value;
        var password = this.password.value;
        callback(username, password);
    });
    return login;
}
function showSelection(selector, buttonSelector, destinationSelector){
    var button = document.querySelector(buttonSelector);
    var origin = document.querySelector(selector);
    var destination = document.querySelector(destinationSelector);
    //var targetSelector = document.querySelector(selector);
    button.addEventListener('click', function(event){
        event.preventDefault();
        
        origin.classList.toggle(selector.substring(1)+ "--hide");
        destination.classList.toggle(destinationSelector.substring(1)+"--hide");
    });
}
function createSearch(selector, callback) {
    var search = document.querySelector(selector);
    // search.onsubmit = function (event) {
    search.addEventListener('submit', function (event) {
        event.preventDefault();
        var query = this.query.value;
        callback(query);
        // };
    });
    return search;
}
function createResults(selector, results) {
    var list = document.querySelector(selector);
    list.innerHTML = '';
    results.forEach(function (result) {
        var item = document.createElement('li');
        var title = document.createElement('h3');
        title.innerText = result.title;
        var link = document.createElement('a');
        link.target = '_blank';
        link.href = result.link;
        link.append(title);
        item.append(link);
        if (result.rating) {
            var rating = document.createElement('span');
            rating.innerText = result.rating;
            item.append(rating);
        }
        var description = document.createElement('p');
        description.innerText = result.description;
        item.append(description);
        list.append(item);
    });
}