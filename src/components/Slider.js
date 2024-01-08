import React from 'react'
import image1 from '../images/ecommerce.png'
import image2 from '../images/download.jpg'
import image3 from '../images/images.png'
const Slider = () => {
  return (
    <>
        <div id="carouselExampleControls" className="carousel slide position relative" data-bs-ride="carousel">
  <div className="carousel-inner slider">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..." style={{height: '100%'}} />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..." style={{height: '100%'}}/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..." style={{height: '100%'}} />
    </div>
  </div>
  <button className="carousel-control-prev position absolute" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next position-absolute" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider
