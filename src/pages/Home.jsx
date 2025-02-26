import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center m-auto">
			<h1>Welcome to the Star Wars Universe</h1>
		</div>
	);
}; 