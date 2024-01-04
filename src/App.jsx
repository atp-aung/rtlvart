import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";
import Article from './Article'
import Home from './Home';
import Detail from './Detail';
import AllService from './AllService';

const AddArticleContext = createContext();
const HomeContext = createContext();

function App() {
  const [atcAry, setAtcAry] = useState([])
  const [newAtc, setNewAtc] = useState("")
  const [dtlId, setDtlId] = useState("nb1")
  const [respDtl, setRespDtl] = useState("")
  const [catname, setCatname] = useState("")

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/articles`)
      .then(response => {
        setAtcAry(response.data)
      })
  }, [])

  return (
    <>
      <div>
        <Link to="/">Home</Link> |
        <Link to="/add" > Add Article</Link >
      </div>

      <Routes>
        <Route path="/" element={<HomeContext.Provider value={{ atcArySt: [atcAry, setAtcAry], dtlIdSt: [dtlId, setDtlId], respDtlSt: [respDtl, setRespDtl], catNameSt: [catname, setCatname] }}>
          <Home ctx={HomeContext} />
        </HomeContext.Provider >} />

        <Route path="/add" element={<AddArticleContext.Provider value={{ newAtcSt: [newAtc, setNewAtc], atcArySt: [atcAry, setAtcAry] }}>
          <Article ctx={AddArticleContext} />
        </AddArticleContext.Provider >} />

        <Route path="/detail/:id" element={<Detail id={respDtl.id} body={respDtl.body} title={respDtl.title} catId={respDtl.category_id} catname={catname.name} />} />
      </Routes>
    </>
  )
}

export default App
