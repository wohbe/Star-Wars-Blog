import React from 'react';
import { useState, useEffect } from 'react';
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";

export const Planets = () => {

  const [planets, setPlanets] = useState([])
  const [favorite, setFavorite] = useContext(FavoriteContext) // Uso el contexto de favoritos

  const getPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets")
    const data = await response.json()
    setPlanets(data.results)
  }

  const addToFavorites = (planet) => {
    if (!favorite.some((fav) => fav.name === planet.name)) { // Si el array global de favoritos tiene un objeto cuyo name coincide con el que se pasa, se ignora. Sino, se mete.
      setFavorite([...favorite, planet]);
    }
  }

  useEffect(() => {
    getPlanets()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {planets.map((planet, index) => (
          <div className="col-6" key={index}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://i.imgur.com/VvvujBL.png" className="img-fluid rounded-start" alt={planet.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">
                      <strong>Climate:</strong> {planet.climate}<br />
                      <strong>Terrain:</strong> {planet.terrain}<br />
                      <strong>Population:</strong> {planet.population}
                    </p>
                    <button className="btn btn-outline-danger" onClick={() => addToFavorites(planet)}>
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