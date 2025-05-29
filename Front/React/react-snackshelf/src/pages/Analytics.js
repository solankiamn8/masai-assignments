import React, {useEffect, useState} from "react";
import { db, ref, set, onValue, remove, update } from "../services/firebase";


function Analytics() {
    const[snacks, setSnacks] = useState([])

    useEffect(()=> {
            let snacksRef = ref(db, 'snacks')
            onValue(snacksRef, snapshot => {
                const data = snapshot.val()
                const loaded = data ? Object.values(data) : []
                setSnacks(loaded)
            })
        }, [])
    
    const totalSnacks = snacks.length;

    const averagePrice = totalSnacks>0 ? (snacks.reduce((sum, s) => sum + s.price, 0) / totalSnacks.toFixed(2)) : 0;

    return (
        <div style={{padding: '1rem'}}>
            <h1>SnackShelf Analytics</h1>
            <p>This page will show snack stats like total count, avg price, top rated snack, etc</p>
            <div style={{display:"grid", gap:'1rem'}}>
                <div>Total Snacks: {totalSnacks}</div>
                <div>Average Price: {averagePrice}</div>
            </div>
        </div>
    )
}

export default Analytics;