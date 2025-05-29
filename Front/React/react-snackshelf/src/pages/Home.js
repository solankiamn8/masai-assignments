import React, {useEffect, useState} from "react";
import { db, ref, set, onValue, remove, update } from "../services/firebase";

function Home(){
    const [snacks, setSnacks] = useState([])
    const [form, SetForm] = useState({ title: "", category: 'Sweet', price: '', rating: ''})
    const [editId, setEditId] = useState(null)
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    const ITEMS_PER_PAGE = 6

    useEffect(()=> {
        let snacksRef = ref(db, 'snacks')
        onValue(snacksRef, snapshot => {
            const data = snapshot.val()
            const loaded = data ? Object.values(data) : []
            setSnacks(loaded)
        })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const id = editId || `snk_${Date.now()}`
        const snackRef = ref(db, `snack/${id}`)
        set(snackRef, {
            id,
            title: form.title.trim(),
            category: form.category,
            price: parseFloat(form.price),
            rating: parseFloat(form.rating),
            createdAt: Date.now()
        })
        setForm({title: '', category: 'Sweet', price: '', rating: ''})
        setEditId(null)
    }

    const handleEdit = snack => {
        setEditId(snack.id)
        setForm({
            title: snack.title,
            category: snack.category,
            price: snack.price,
            rating: snack.rating
        })
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }

    const handleDelete = id => {
        remove(ref(db, `snacks/${id}`))
    }

    const filtered = snacks.filter(s => 
        s.title.toLowerCase().includes(search.toLowerCase())
    )
    const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE)
    const displayed = filtered.slice(
        currentPage * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )

    return (
        <div style={{padding: '1rem'}}>
            <h1>SnackShelf</h1>

            <input 
                autoFocus
                placeholder="Search snacks..."
                value={search}
                onChange={e => {
                    setSearch(e.target.value)
                    setCurrentPage(0)
                }}
                style={{padding: '0.5rem', marginBottom: '1rem', width: '100%'}}
            />

            <form onSubmit={handleSubmit} style={{marginBottom: '1rem', display:'grid', gap:'0.5rem'}}>
                <input
                    required
                    placeholder="Title"
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                />
                <select 
                    value={form.category}
                    onChange={e => setForm({...form, category: e.target.value})}    
                >
                    <option value='Sweet'>Sweet</option>
                    <option value='Savory'>Savory</option>
                    <option value='Beverage'>Beverage</option>
                    <option value='Baked'>Baked</option>
                </select>
                <input
                    required
                    type="number"
                    step='0.1'
                    placeholder="Price"
                    value={form.price}
                    onChange={e => setForm({...form, price: e.target.value})}
                />
                <input
                    required
                    type="number"
                    step='0.1'
                    placeholder="Rating"
                    value={form.rating}
                    onChange={e => setForm({...form, rating: e.target.value})}
                />
                <button type="submit">{editId ? 'Update' : 'Add'} Snack</button>
            </form>

            <div className="grid">
                {displayed.map(snack => (
                    <div key={snack.id} className="card">
                        <h3>{snack.title}</h3>
                        <p>Category: {snack.category}</p>
                        <p>Price: ${snack.price.toFixed(2)}</p>
                        <p>Rating: {snack.rating}</p>
                        <div style={{marginTop: '0.5rem'}}>
                            <button onClick={() => handleEdit(snack)}>Edit</button>
                            <button onClick={() => handleDelete(snack.id)} style={{marginLeft: '0.5rem'}}>
                                Delete
                            </button>
                        </div>
                    </div>    
                ))}
            </div>

            <div style={{marginTop: '1rem'}}>
                <button onClick={() => setCurrentPage(p => p-1)} disabled={currentPage === 0}>
                    Previous
                </button>
                {Array.from({length: pageCount }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        style={{
                            fontWeight: currentPage === i ? "bold" : "normal",
                            margin: '0 0.25rem'
                        }}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === pageCount - 1 || pageCount === 0}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Home