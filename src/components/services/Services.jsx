import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faShoppingBag, faTags, faShoePrints, faHatCowboy, faRing, faShoppingCart, faShirt, faGift } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import data from '../../data/index.json';

const icons = {
  Clothing: faTshirt,
  ShoppingBag: faShoppingBag,
  PriceTags: faTags,
  Footwear: faShoePrints,
  Hats: faHatCowboy,
  ShoppingCart: faShoppingCart,
  Shirts: faShirt,
  Gifts: faGift
};


export const Services = () => {
  return (
    <section id="services" class="services-p1">

    <div className="container ">
        <h2 class="text-left ">What we provide?</h2>

    <div className="projects-header mb-3">
     
    </div>

    <div className="row justify-content-between">
      {data?.services?.map((item, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-3">
          <div className="card bg-white p-4 col-lg-6" style={{ width: '100%' }}>
            <FontAwesomeIcon icon={icons[item.icon]} size="3x" color="" className="mb-3 img-top mx-auto" />
            <div className="card-body mx-2" style={{ height: '170px' }}>
              <div style={{ overflowY: 'auto' }}>
                <h3 className="card-title text-center fs-5" style={{ color: 'black',fontWeight:'600' }}>{item.title}</h3>
                <p className="card-text text-centerfs-6" style={{ color: '' }}>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </section>
  )
}
 export default Services;