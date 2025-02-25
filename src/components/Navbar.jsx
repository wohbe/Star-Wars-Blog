import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	
	return (
		<nav className="navbar navbar-expand-lg mb-5 sticky-top">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand mr-3"><i class="fab fa-rebel" id="rebel-alliance-ico"></i></a>
				</Link>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
      			<ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-between w-75">
        			<li class="nav-item">
          				<a class="nav-link text-light active" aria-current="page" href="#">People</a>
        			</li>
					<Link to="/planets">
					<li class="nav-item">
          				<a class="nav-link text-light active" aria-current="page" href="#">Planets</a>
        			</li>
					</Link>
					<li class="nav-item">
          				<a class="nav-link text-light active" aria-current="page" href="#">Vehicles</a>
        			</li>
				</ul>
			</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
