import React from 'react'
import './collection.css'
import product_1 from "../../asset/21.jpg"
import product_2 from "../../asset/19.jpg"
import product_3 from "../../asset/18.jpg"
import product_4 from "../../asset/22.jpg"
import product_5 from "../../asset/17.jpg"
import product_6 from "../../asset/18.jpg"
export const Collection = () => {
  return (
    
<section id="features-collection" class="features-collection">
    <div class="container">
        <h2 class="">Latest collection</h2>
        <div class="row ">
            <div class=" features-collection-5">
         <div class="features-collection-box">
            <img src={product_1} alt=""/>
            <h6>pramotion</h6>
         </div>

         <div class="features-collection-box">
            <img src={product_3} alt=""/>
            <h6>pramotion</h6>
         </div>

         <div class="features-collection-box">
            <img src={product_2} alt=""/>
            <h6>pramotion</h6>
         </div>

         <div class="features-collection-box">
            <img src={product_5} alt=""/>
            <h6>pramotion</h6>
         </div>

         <div class="features-collection-box">
            <img src={product_4} alt=""/>
            <h6>pramotion</h6>
         </div>
         <div class="features-collection-box">
            <img src={product_6} alt=""/>
            <h6>pramotion</h6>
         </div>
</div>


</div>
</div>
</section>
  )
}
