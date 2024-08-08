import React, { useEffect, useReducer, useState } from 'react'
import './App.css'

export default function Phonelist(props) {

 const initialstate=0;

  const [ndata,setndata]=useState([]);

   const reducer=(state,action)=>{
    if(action.type==='incre')  {
      return state +1 ;
    }

    return state;

   }

   const [state,dispatch]=useReducer(reducer,initialstate);

   useEffect(()=>{
   
    
    fetch("https://meowfacts.herokuapp.com/")
   .then( res => res.json())
   .then(data=> setndata(data))


   
   },[])

  const {image,title,price}= props;

  return (
    <div className='main'>
      <div>
      <img src={image}/>
      </div>
    <div>
    <h2>{title}</h2>
      <p>₹{price} </p>
      <p>FREE Delivery </p>
    </div>
    <div>
      {state}
    </div>
    <button onClick={()=> {dispatch({type:'incre'})}}>+</button>
     
    <ul>

          <li key={ndata.id}>
          {ndata.data}
           </li>
 
     </ul>
    
    </div>
  )
}
