import React from 'react'
import Phonelist from './phonelist'
import books from './books.json';



export default function Phone() {
 
  

  return (
    <div>
       {books.map((element) => {
            return <Phonelist 
                 image={element.image}
                 title={element.title}
                 price={element.price}
                 />
       })}
</div>
  );
}
