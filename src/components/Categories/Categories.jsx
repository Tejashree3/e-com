import React from 'react'
import './Categories.css'

import shoe_1 from "../../asset/5.jpg"
import shoe_2 from "../../asset/6.jpg"
import shoe_3 from "../../asset/7.jpg"

import shoe_4 from "../../asset/8.jpg"

import shoe_5 from "../../asset/14.jpg"


export const Categories = () => {
  return (

<section id="image-5" class="5-image-p1">
<div class="container">
<h2 class="text-left ">Shoes Categories!</h2>

    <div class="row align-items-center">
       
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 text-center circle-img with-background-1">
          
            <img src={shoe_1} class="Image 1"/>
        <h4>erge</h4>
       </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 text-center circle-img with-background-2">
            <img src={shoe_2} class="Image 2"/>
            <h4>erge</h4>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 text-center circle-img with-background-3">
            <img src={shoe_3} class="Image 3"/>
        
            <h4>erge</h4>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 text-center circle-img with-background-4">
            <img src={shoe_4} class="Image 4"/>
            <h4>erge</h4>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 text-center circle-img with-background-5">
            <img src={shoe_3} class="Image 5"/>
            <h4>erge</h4>
        </div>
    </div>
</div>


</section>



  )
}
export default Categories;
