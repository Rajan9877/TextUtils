import React from 'react'

export default function 
Footer(props) {
  return (
    <>
    <div className="card-footer text-center my-3" style={props.mode=='dark'?{color:'white'}:{color:'grey'}}>
    TextUtils - Created By Rajan
    </div>
    </>
  )
}
