import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function DetailPage(){
    let {id} = useParams()
    let [pokemon, setPokemon] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getDetails() {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            let data = await res.json()
            setPokemon(data)
            setLoading(false)
        }
        getDetails()
    }, [id])

    if(loading) return <p>Loading...</p>
    if(!pokemon) return <p>Not found</p>

    return (
        <div>
            <Link to='/'>Back to Dashboard</Link>
            <h1>{pokemon?.name}</h1>
            <img src={pokemon.sprites.front_default}/>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Abilities: {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
            <p>Moves: {pokemon.moves.slice(0,5).map(m=> m.move.name).join(", ")}...</p>
        </div>
    )
}
