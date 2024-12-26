import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import productimg_1 from "../../asset/16.jpg"
import productimg_2 from "../../asset/24.jpg"
import productimg_3 from "../../asset/25.jpg"
import productimg_4 from "../../asset/26.jpg"
import productimg_5 from "../../asset/23.jpg"
import productimg_6 from "../../asset/91.jpg"



export const Product = () => {
  return (
    <section id="product" class="section-p1">
  <div class="container">
  <h2 class="text-left ">Today's Best Selling Product!</h2>

    <div class="row justify-content-around pro">
      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_1} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
<i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
            <a href=""><button class="m-1 offer-btn">ADD TO CARD</button></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_2} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>

      
      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_3} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>

      
      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_4} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>

      
      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_5} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>

      
      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_6} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>



      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_6} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
<i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_3} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_1} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_1} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_3} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-6 col-12 mb-4">
        <div class="card produc">
          <img src={productimg_5} class="card-img-top" alt=""/>
          <i class="fas fa-heart heart"> <FontAwesomeIcon icon={faHeart} /></i>
          <div class="card-body des">
            <h5 class="card-title head-tag">T-Shirt</h5>
            <p class="card-text">Round Neck</p>
            <div class="star">
            <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i class="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
            </div>
       <a href=""><button class=" offer-btn">ADD TO CART</button></a>
          </div>
        </div>
      </div>




   
    </div>
  </div>
</section>
  )
}
export default  Product;