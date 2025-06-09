import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import ErrorBanner from "../components/ErrorBanner";
import Pagination from "../components/Pagination";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

export default function Dashboard(){
    let dispatch = useDispatch()
    let { list, loading, error, offset, filters } = useSelector(state => state.pokemon)

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: 'SET_LOADING' })
            try {
                let res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=${offset}=0&limit=20')
                let data = await res.json()

                let details = await Promise.all(data.results.map(p => fetch(p.url).then(res => res.json())))

                let filtered = filters.type 
                    ? details.filter(p => p.types.some(t=> t.type.name === filters.type))
                    : details;

                filtered.sort((a,b) => 
                    filters.sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                )

                dispatch({type: 'SET_POKEMONS', payload: filtered })
            } catch {
                dispatch({type: 'SET_ERROR'})
            }
        }
        fetchData()
    }, [offset, filters])

    if(loading) return <Loader />
    if(error) return <ErrorBanner message="Something went wrong"/>
    if(list.length === 0) return <p>No Pokemon match your search.</p>

    return (
        <div>
            <h1>Pokedex Pro</h1>
            <Filters />
            <div className="grid">
                {list.map(pokemon => (
                    <Link to={'/details/${pokemon.id}'} key={pokemon.id}>
                        <div 
                            className="card"
                            style={{
                                border: pokemon.types.some(t => t.type.name === 'fire') ? '2px solid red': 
                                        pokemon.types.some(t => t.type.name === 'water') ? '2px solid blue': '',
                                backgroundColor: pokemon.base_experience > 100 ? 'lightgreen' : '', 
                            }}
                            >
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <h3>{pokemon.name} {pokemon.base_experience > 100 && '⚡'}</h3>
                                <p>Exp: {pokemon.base_experience}</p>
                                <p>Weight: {pokemon.weight}</p>
                                <p>Types: {pokemon.type.map(t => t.type.name).join(", ")}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination />
        </div>
    )
}