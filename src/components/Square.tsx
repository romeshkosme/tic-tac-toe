import "./Square.css"
const cellStyle = {
	height: "40px",
	width: "40px",
	border: "1px solid white",
	borderRadius: "5px",
	margin: "5px",
	cursor: "pointer",
};

function Square({
	value,
	blueChance,
	setBlueChance,
	index,
	setSquares,
	squares,
	winner
}: any) {
	return (
		<>
			<span
				style={cellStyle}
				className={`block ${
					!value ? "bg-white" : value === "blue" ? "bgBlue" : "bgRed"
				}`}
				onClick={(e: any) => {
          if (squares[index] || winner) {
            return
          }
					const temp = squares;
					temp[index] = blueChance ? "blue" : "red";
					setBlueChance(!blueChance);
					setSquares([...temp]);
				}}
			></span>
		</>
	);
}

export default Square;
