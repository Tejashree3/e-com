import React from 'react';
import './Featured.css';
import  watch_1 from "../../asset/w-1.jpg";
import  watch_2 from "../../asset/w-2.jpg";
import  watch_3 from "../../asset/w-3.jpg";



export const Featured = () => {
  return (
<section id="watch" class="watch">
    <div class="container">
        <h2 class="">Featured collection</h2>
        <div class="row home watch-3">
            <div class="col-lg-4 col-md-6 watches">
                <img src={watch_2} class="watch-img img-fluid" alt=""/>
                <div class="watch-body">
                    <h3 class="watch-title">Fastrack</h3>
                    <p class="watch-para">A watch is a portable timepiece intended to be carried or worn by a person.</p>
                    <button class="watch-btn ">SHOP NOW</button>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 watches">
                <img src={watch_3} class="watch-img img-fluid" alt=""/>
                <div class="watch-body">
                    <h3 class="watch-title">Silver Chain </h3>
                    <p class="watch-para">A watch is a portable timepiece intended to be carried or worn by a person.</p>
                    <button class="watch-btn ">SHOP NOW</button>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 watches">
                <img src={watch_1} class="watch-img img-fluid" alt=""/>
                <div class="watch-body">
                    <h3 class="watch-title">Puma</h3>
                    <p class="watch-para">A watch is a portable timepiece intended to be carried or worn by a person.</p>
                    <button class="watch-btn ">SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Featured;