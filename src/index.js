import React from 'react'
import ReactDom from 'react-dom'
import './index.css' 

function CarList() {
  return (
    <section className="carlist">
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
    </section>
  )
}

const Car = () => {
  return (
    <article className="car">
      <Image/>
      <Name/>
      <Price/>
    </article>
  )
}

const Image = () => <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/560px-2019_Tesla_Model_3_Performance_AWD_Front.jpg"/>

const Name = () => <h1>Model 3</h1>

const Price = () => (
  <h4 style={ {color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'} }>$38000</h4>
)

ReactDom.render(<CarList/>, document.getElementById('root'))