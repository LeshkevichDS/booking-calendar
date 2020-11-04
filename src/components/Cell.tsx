import React from "react";

interface CellProps {
    x: number;
    y: number;
}

export const Cell: React.FC<CellProps> = ({x, y}) => {
    function handleClick() {
        console.log(`По ячейке ${`x${x},y${y}`} кликнули`);
    }
    return (
        <div onClick={handleClick} style={{ width: "35px", height: "35px", border: "1px solid" }}>{`x${x}y${y}`}</div>
    )
}