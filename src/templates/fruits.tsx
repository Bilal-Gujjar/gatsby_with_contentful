import React from 'react'

export default function Fruit({pageContext}) {
 // console.log(pageContext);
  

  
    return (
        <div>
            <h1> </h1>
            <h3>Description</h3>
    <p>{pageContext.description}</p>
        </div>
    )
}

