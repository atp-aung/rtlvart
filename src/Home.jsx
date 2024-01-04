import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = ({ ctx }) => {
  const { atcArySt, dtlIdSt, respDtlSt, catNameSt } = useContext(ctx);
  const [atcAry, setAtcAry] = atcArySt;
  const [dtlId, setDtlId] = dtlIdSt;
  const [respDtl, setRespDtl] = respDtlSt
  const [catname, setCatname] = catNameSt

  const navigate = useNavigate()

  const dtlShow = async (id) => {
    await
      axios
        .get(`http://localhost:8000/api/articles/${id}`)
        .then(response => {
          console.log("resp is ----" + JSON.stringify(response.data))
          setRespDtl(response.data)
          console.log(respDtl)
          console.log("catID is" + respDtl.category_id)
        })

    // setDtlId(id)
    // console.log(`props send ${dtlId}`)
    navigate(`/detail/${id}`)
    console.log(`success id dtl ${id} found`)
  }

  return (
    <>
      <h3>
        Articles
      </h3>
      <ul>
        {atcAry.map(atc =>
          <li key={atc.id} > {atc.title}
            <button onClick={() => dtlShow(atc.id)}>detail</button>
          </li>
        )}
      </ul >
    </>
  )
}

export default Home
