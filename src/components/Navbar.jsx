import React from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";

export const Navbar = () => {

	const [favorite, setFavorite] = useContext(FavoriteContext)

	const removeFavorite = (chosenone) => {
		const updatedFavorites = favorite.filter((fav) => fav.name !== chosenone.name)
		setFavorite(updatedFavorites)
	  }
	
	return (
		<nav className="navbar navbar-expand-lg mb-5 sticky-top">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand mr-3"><i class="fab fa-rebel" id="rebel-alliance-ico"></i></a>
				</Link>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
      			<ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-between w-75">
					<Link to="/people">
        			<li class="nav-item">
          				<a class="nav-link text-light active" aria-current="page" href="#">People</a>
        			</li>
					</Link>
					<Link to="/planets">
					<li class="nav-item">
          				<a class="nav-link text-light active" aria-current="page">Planets</a>
        			</li>
					</Link>
					<Link to="/vehicles">
					<li class="nav-item">
          				<a class="nav-link text-light active" aria-current="page" href="#">Vehicles</a>
        			</li>
					</Link>
				</ul>
			</div>
				<div className="ml-auto">
				<div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" 
			data-bs-toggle="dropdown" aria-expanded="false">
              Favorites ({favorite.length})
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              {favorite.length === 0 ? (
                <li><span className="dropdown-item">No favorites yet</span></li>
              ) : (
                favorite.map((chosenone, index) => (
                  <li key={index}>
                    <span className="dropdown-item">
                      {chosenone.name}
                      <button className="btn btn-sm btn-danger ms-2"onClick={() => removeFavorite(chosenone)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
				</div>
			</div>
		</nav>
	);
};
