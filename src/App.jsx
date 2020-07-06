import React from 'react';
import "./App.css"
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            films: [],
            person: [],
            loadFilm: false,
            loadPeople: false
        }
    }


    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err))

    }
    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err))

    }

    render() {
        if (this.state.loadFilm) {
            this.loadFilm();
            return this.state.films.map(films => {
                return (
                    <div key={films.id} className="card m-2">
                        <div className="card-body">
                            <h5 className="card-title">{films.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{films.director}</h6>
                            <p className="card-text">{films.producer}</p>
                            <a href={films.url} className="card-link">Go To Endpoint</a>
                        </div>
                    </div>
                )

            })
        } else if (this.state.loadPeople) {
            this.loadPeople();
            return this.state.people.map(person => {
                return (
                    <div key={person.id} className="card m-2">
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{person.age}</h6>
                            <p className="card-text">{person.hair_color}</p>
                            <a href={person.url} className="card-link">Go To Endpoint</a>
                        </div>
                    </div>
                )
            })
        } else {
            return (
                <>
                    <button onClick={()=> this.setState({loadFilm: true})} className="btn btn-danger btn-sm m-3">Load Films</button>
                    <button onClick={()=> this.setState({loadPeople: true})} className="btn btn-primary btn-sm m-3">Load People</button>
                </>
            )
        }


    }

}



export default App
