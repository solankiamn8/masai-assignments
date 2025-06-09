import React from "react";
import { useDispatch } from "react-redux";

export default function Filters() {
    let dispatch = useDispatch()

    return (
        <div>
            <label>Type: </label>
            <select onChange={(e) => dispatch({ type: 'SET_FILTER', payload: { type: e.target.value } })}>
            <option value="">All</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
        </select>
        <label>Sort: </label>
        <select onChange={(e) => dispatch({ type: 'SET_FILTER', payload: { sort: e.target.value } })}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
        </div>
    );
}