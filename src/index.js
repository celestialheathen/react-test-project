import React from 'react'
import ReactDom from 'react-dom'
import './index.css' 

const cars = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/560px-2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    name: "Model 3",
    price: 38000
  },
  
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/560px-2017_Tesla_Model_X_100D_Front.jpg",
    name: "Model X",
    price: 120000
  }

]


function CarList() {
  return (
    <section className="carlist">
      {cars.map( (car) => {
        const {img, name, price} = car 
        return (
          <Car img={img} nane={name} price={price} />
        )
      })
      }
    </section>
  )
}


const Car = ( {img, name, price} ) => {
  return (
    <article className="car">
     <img src={img} alt=""/>
     <h1>{name}</h1>
     <h4>{price}</h4>
    </article>
  )
}

ReactDom.render(<CarList/>, document.getElementById('root'))