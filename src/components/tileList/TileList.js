import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objects }) => {
    return (
        <div>
            {objects.map((obj, i) => {
                const { name, ...description } = obj;
                return <Tile name={name} description={description} key={i} />;
            })}
        </div>
    );
};
