import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from './components/Containers/ItemListContainer'
import ItemDetailContainer from './components/Containers/ItemDetailContainer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App
