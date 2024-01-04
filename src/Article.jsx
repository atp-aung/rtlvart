import { useContext, useState } from 'react'

const Article = ({ ctx }) => {
  const { newAtcSt, atcArySt } = useContext(ctx);
  const [newAtc, setNewAtc] = newAtcSt;
  const [atcAry, setAtcAry] = atcArySt;
  const [idatc, setIdatc] = useState(30)

  return (
    <>
      <h3>
        Add new article
      </h3>
      <button onClick={() => {
        const nnn = [...atcAry, { id: idatc, title: "bbb", body: "nbnb", category_id: 5 }]
        setAtcAry(nnn)
        console.log(atcAry)
        setNewAtc("ggg")
        console.log(newAtc)
        setIdatc(idatc + 1)
      }}>Test ctx</button >
    </>
  )
}

export default Article
