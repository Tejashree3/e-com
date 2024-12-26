import React from 'react'
import  './banner.css'
import banner from "../../asset/73.jpg"

export const Banner = () => {
  return (
    <section id="banner" class="banner-home" stayle>

    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-6">
                <div class="box-container text-left"> 
                    <h5 class="banner-h5">UPTO 50%OFF</h5>
                    <h1 class="banner-heading">MEGA FASHION <span>SALE</span> & <span>OFFERS</span></h1>
                    {/* <p class="banner-p">New collection</p> */}
                    <div class="btn-home">
                        <a href=""><button class="banner-btn">buy now</button></a>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>
  )
}
export default Banner;