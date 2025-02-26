import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center m-auto">
			<h1>May the 4 be with you</h1>
			<img src="https://atlas-content-cdn.pixelsquid.com/stock-images/death-star-do2Z7l0-600.jpg" alt="Star Wars" />
		</div>
	);
}; 