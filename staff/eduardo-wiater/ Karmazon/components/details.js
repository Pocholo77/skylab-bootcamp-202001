'use strict'



function Details (detailInfo) {
    var details = document.createElement ('div');

    Component.call(this, details);

    details.classList.add('details');

    details.innerHTML = '<h2>' + detailInfo.id +': '+detailInfo.name+'</h2>'
        .concat('<img src="' + detailInfo.image + '">')
        .concat('<p>YEAR: ' + detailInfo.year + '</p>')
        .concat('<p>COLOR: ' + detailInfo.color  + '</p>')
        .concat('<p>MAKER: ' + detailInfo.maker  + '</p>')
        .concat('<p>COLLECTION: ' + detailInfo.collection  + '</p>')
        .concat('<p>STYLE: ' + detailInfo.style  + '</p>')
        .concat('<p>DESCRIPTION: ' + detailInfo.description + '<p>')
        .concat('<span>PRICE: ' + detailInfo.price + '$</span>')
        .concat('<button>BACK</button>');
  
}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;



 