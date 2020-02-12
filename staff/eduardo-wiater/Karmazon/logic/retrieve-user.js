function retrieveUser(token, callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function')

    const [header, payload, signature] = token.split('.')
    const playloadObject = JSON.parse(atob(payload))
    const { sub, iat, exp } = playloadObject

    callback('https://skylabcoders.herokuapp.com/api/v2/users/'+sub , {
        method : 'GET',
        headers: { 'Content-Type':'application/json','Authorization':'Bearer'+token}
    } , response=>{

        if(response instanceof Error) return callback(response)

        const { name, error} = JSON.parse(response.content)

        if(error) return callback(error)

        callback(name)

    })

    }  
 