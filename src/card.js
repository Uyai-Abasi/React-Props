import React from 'react';
// import image from './image/landscape.webp';

const Card = (props) => {

  let items = props.items

  return (
    <>

<div className='container'>
      {items.map((item) => (

          <div key={item.id} className='card' >
            <div className='image'>
              <img src={item.image} alt="" />
            </div>
            <section>
              <div>
                <h2>{item.heading}</h2>
              </div>
              <div className='paragraph'>
                <p> {item.text} </p>
               
              </div>
              <div className='btn'>
                <button>Read article</button>
              </div>
            </section>
          </div>
      ))
      
    }
    </div>

    </>
  )
};



export default Card;