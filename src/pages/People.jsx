import React from 'react';
import { useState, useEffect } from 'react';
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";

export const People = () => {

  const [people, setPeople] = useState([])
  const [favorite, setFavorite] = useContext(FavoriteContext) // Uso el contexto de favoritos

  const getPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json()
    setPeople(data.results)
  }

  const addToFavorites = (person) => {
    if (!favorite.some((fav) => fav.name === person.name)) { // Si el array global de favoritos tiene un objeto cuyo name coincide con el que se pasa, se ignora. Sino, se mete.
      setFavorite([...favorite, person]);
    }
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {people.map((person, index) => (
          <div className="col-6" key={index}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                 <div className="dropright">
                  <img src="https://i.imgur.com/VvvujBL.png" className="img-fluid rounded-start" alt={person.name} role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                  <ul className="dropdown-menu">
                        <h2>{person.name}</h2>
                        <h4><strong>Detalles</strong></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui nisi, ornare quis sollicitudin a, malesuada in neque. Cras sed tincidunt mi. Vestibulum vitae tempor purus. Integer pulvinar nulla quis sem mattis pharetra. Etiam dapibus sodales velit, eu hendrerit justo consequat a. Phasellus feugiat magna in molestie vulputate. Proin pellentesque metus justo, in tempus eros iaculis quis. Sed dolor sem, dignissim at pulvinar sit amet, commodo quis ligula. Proin pharetra neque quis metus iaculis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </ul>
                    </div>
                  </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">
                      <strong>Height:</strong> {person.height}<br />
                      <strong>Mass:</strong> {person.mass}<br />
                      <strong>Birth Year:</strong> {person.birth_year}
                    </p>
                    <button className="btn btn-outline-danger" onClick={() => addToFavorites(person)}>
                      <i className="fas fa-heart"></i> Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}