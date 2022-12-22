import { Link } from "react-router-dom";

function Home() {
	return (
		<div className='bg-black vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'>
			<h1 className="text-white">Tic Tac Toe</h1>
			<div className="mt-5">
        <Link to="/game">
				<button className="btn btn-light">Start</button>
        </Link>
			</div>
		</div>
	);
}

export default Home;
