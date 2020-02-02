'use strict';

function retrieveVehicle(id, callback) {

    call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/' + id, function (response) {
        if (response instanceof Error) return callback(response);

        if (response.status === 200) {
            var details = JSON.parse(response.content);
            
            callback(details);
        }
    });
}