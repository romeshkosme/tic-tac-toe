import { useEffect, useState } from "react";
import Square from "../components/Square";
import "./Game.css";

function Game() {
	const [squares, setSquares] = useState(Array(9));
	const [blueChance, setBlueChance] = useState(true);
	const [winner, setWinner] = useState<any>();
	const calculateWinner = () => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};
	useEffect(() => {
		const winner = calculateWinner();
		setWinner(winner);
	}, [squares]);
	const restart = () => {
		setSquares(Array(9));
		setBlueChance(true);
		setWinner(false);
	};
	return (
		<>
			<div className='bg-black vh-100 vw-100 d-flex flex-column  align-items-center'>
				<div className='game-title mt-5'>
					<h1 className='text-white'>Tic Tac Toe</h1>
				</div>
				<div className='mt-5 text-white'>
					{!winner && (
						<h4>
							<span className={`${blueChance ? "text-blue" : "text-red"}`}>
								{blueChance ? "Blue" : "Red"}
							</span>{" "}
							plays
						</h4>
					)}
					<div className=''>
						{winner && (
							<h4 className='text-white'>
								Winner is{" "}
								<span
									className={`${
										winner === "blue" ? "text-blue" : "text-red"
									} underline`}
								>
									{winner}
								</span>
							</h4>
						)}
					</div>
				</div>
				<div className='game-area mt-3'>
					<div className='blocks d-flex'>
						<Square
							value={squares[0]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={0}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
						<Square
							value={squares[1]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={1}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
						<Square
							value={squares[2]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={2}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
					</div>
					<div className='blocks d-flex'>
						<Square
							value={squares[3]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={3}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
						<Square
							value={squares[4]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={4}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
						<Square
							value={squares[5]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={5}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
					</div>
					<div className='blocks d-flex'>
						<Square
							value={squares[6]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={6}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
						<Square
							value={squares[7]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={7}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
						<Square
							value={squares[8]}
							blueChance={blueChance}
							setBlueChance={setBlueChance}
							index={8}
							setSquares={setSquares}
							squares={squares}
							winner={winner}
						/>
					</div>
				</div>
				<div className='mt-3'>
					<div className='text-center'>
						{winner && (
							<button className='btn mt-2 btn-light' onClick={restart}>
								Restart
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Game;
