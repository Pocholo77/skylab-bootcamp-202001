const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {


    state = { view: 'login', vehicles: undefined, vehicle: undefined, error: undefined }

    handleLogin = (username, password) => {
        try {
            authenticate(username, password)
            this.setState({ view: 'search' })

        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToRegister = () => this.setState({ view: 'register' })

    handleRegister = (name, surname, username, password) => {
        try {
            register(name, surname, username, password)
            this.setState({ view: 'login' })

        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }

    }

    handleGoToLogin = () => this.setState({ view: 'login' })

    handleSearch = (query) => {
        searchVehicles(query, vehicles => {
            if (!vehicles.length) return this.setState({ error: 'No results ' + IT })
            this.setState({ vehicles })
        })

        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)

    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, error }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch } = this
        return <Fragment>
            <h1>{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {vehicles && <Results results={vehicles} />}

        
        </Fragment>
    }
}























// const IT = '🎈🤡'

// class App extends Component {
//     constructor(props) {
//         super(document.createElement('main'))

//         const app = this.container

//         app.innerHTML = '<h1>' + props.title + '</h1>'

//         const _login = new Login({
//             onSubmit(username, password) {
//                 try {
//                     authenticate(username, password)

//                     _login.container.replaceWith(_search.container)
//                 } catch (error) {
//                     _login.showError(error.message + ' ' + IT)
//                 }
//             },
//             onToRegister() {
//                 _login.container.replaceWith(_register.container)
//             }
//         })

//         app.append(_login.container)

//         const _register = new Register({
//             onSubmit(name, surname, username, password) {
//                 try {
//                     register(name, surname, username, password)

//                     _register.container.replaceWith(_login.container)
//                 } catch (error) {
//                     //alert(error.message + ' ' + IT)
//                     _register.showError(error.message + ' ' + IT)
//                 }
//             },
//             onToLogin() {
//                 _register.container.replaceWith(_login.container)
//             }
//         })

//         const _search = new Search({
//             title: 'Search',

//             onSubmit(query) {
//                 searchVehicles(query, vehicles => {
//                     if (vehicles instanceof Error)
//                         return _search.showError(vehicles.message + ' ' + IT)

//                     if (!vehicles.length)
//                         return _search.showWarning('No results ' + IT)

//                     const __results = new Results({
//                         results: vehicles,

//                         onItemClick(id) {
//                             retrieveVehicle(id, vehicle => {
//                                 retrieveStyle(vehicle.style, style => {
//                                     const detail = new Detail({ vehicle, style })

//                                     _results.replaceWith(detail.container)

//                                     _results = detail.container
//                                 })

//                             })
//                         }
//                     })

//                     if (!_results)
//                         app.append(_results = __results.container)
//                     else {
//                         _results.replaceWith(__results.container)

//                         _results = __results.container
//                     }
//                 })
//             }
//         })

//         //app.append(_search.container) // BYPASS for quick testing search on screen (without going through login)

//         let _results
//     }
