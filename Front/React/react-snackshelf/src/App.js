import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js'
import Analytics from './pages/Analytics.js'

function App() {
  return (
    <div>
      <nav style={{padding: '1rem', background: '#fff', borderBottom: '1px solid #ccc'}}>
        <Link>Home</Link> | <Link>Analytics</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
