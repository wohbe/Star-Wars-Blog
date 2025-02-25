import React from 'react';
import { useState, useEffect } from 'react';

export const Planets = () => {

  const [planets, setPlanets] = useState([])

  const getPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets")
    const data = await response.json()
    setPlanets(data.results)
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