import React from 'react'
import { Link } from 'react-router-dom'

export default function Top() {
  return (
    <div style={{ 
      flex:1, 
      lexDirection:"row",
      textAlign:"center",
      margin:5,
      color:"black"}}>
        To Start Orders, Download App 
        <Link to="/download-app">
          <span style={{ fontSize:20, fontWeight:"bold", color:"red"}}> Freshkhao</span>
        </Link>
    </div>
  )
}
