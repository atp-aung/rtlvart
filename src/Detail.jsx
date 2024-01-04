import { useState } from "react"

const Detail = (props) => {

  console.log("props received id " + props.id)

  return (
    <>
      <h3>
        Detail
      </h3>
      <p>id:--- {props.id}</p>
      <p>title:--- {props.title}</p>
      <p>body:--- {props.body}</p>
      <p>catId:--- {props.catId}</p>
      <p>catname:--- {props.catname}</p>
    </>
  )
}

export default Detail
