'use strict';

// LET's spy to see what's going on in stack...
// call = spy(call);
// search = spy(search);
// googl = spy(googl);

// main code here...

var IT = '🎈🤡';

var login = createLogin('login', {

    onSubmit: function (username, password) {
   
    try{debugger
        authenticate(password, username)

        login.toggle();
        _googl.toggle();
        _ecosia.toggle();
        _bing.toggle();
        _yahoo.toggle();
    }catch(error){
        alert('Wrong credentials, you cannot get in ' + IT);
    }
},
  onToRegister :  function () {
        login.toggle();
        _register.toggle();
    }
});


var _register = createRegister('register', function (name, surname, username, password) {
    try {
        register(name, surname, username, password);

        _register.toggle();
        login.toggle();
    } catch (error) {
        alert(error.message + ' ' + IT);
    }
}, function () {
    _register.toggle();
    login.toggle();
});

var _googl = createSearch('search', function (query) {
    googl(query, spy(function (results) {
        createResults('.results', results);
    }));
});

var _ecosia = createSearch('search-2', function (query) {
    ecosia(query, function (results) {
        createResults('.results-2', results);
    });
});

var _bing = createSearch('search-3', function (query) {
    bing(query, function (results) {
        createResults('.results-3', results);
    });
});

var _yahoo = createSearch('search-4', function (query) {
    bing(query, function (results) {
        createResults('.results-4', results);
    });
});
