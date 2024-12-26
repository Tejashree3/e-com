import React from 'react'
import './offer.css';
export const Offer = () => {
  return (
    
    <section id="discount" class="discount-p1">
  

        <div class="container">
        <h2 class="text-left ">Best Offer!</h2>

            <div class="row justify-content-center">

                <div class="col-6 exclusive">
                    <div class="yellow">
                        <div class="yellow-heding">
                            <h5>Exclusive offer</h5>
                           
                                <h5 class="off">15% OFF</h5>
                          
                        </div>
                        <h2>Best Online <br/>Deals, Free Stuff</h2>
                       <h5>Only on this <span>week....</span> Don't miss</h5>
                        <a href=""><button class=" offer-btn">Get Best Deal -</button></a>
                    </div>
                </div>
                <div class="col-6 regular ">
                    <div class="green">
                        <div class="yellow-heding">
                            <h5>Regular offer</h5>
                           
                        </div>
                        <h2>10% cash-back <br/>on personal care</h2>
                       <h5>Max cashback $12 Code:cadhi868</h5>
                        <a href=""><button class=" offer-btn">Get Now -</button></a>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}
export default Offer;