import React from 'react'

const Condition = ({stock}) => {
//   return (
//     <>{stock > 20 ? "Stock Kelebihan" : "Stock cukup"}</>
//   )
    if(stock>20){
        return (
        <>Stock Kelebihan</>
        )
    }
    else{
        return (
      <>Stock Cukup</>
      )
  }
}

export default Condition