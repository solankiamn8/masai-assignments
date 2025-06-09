import { useDispatch, useSelector } from "react-redux";

export default function Pagination(){
    let dispatch = useDispatch()
    let offset = useSelector(state => state.pokemon.offset)

    return (
        <div>
            <button disabled={offset===0} onClick={() => dispatch({type: 'SET_OFFSET', payload: offset-20})}>
                Previous
            </button>
            <button onClick={() => dispatch({type: 'SET_OFFSET', payload: offset + 20})}>
                Next
            </button>
        </div>
    )
}