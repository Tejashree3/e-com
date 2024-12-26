import React from 'react'
import './card.css';
import { Button } from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faChartLine, faBullhorn, faBookOpen } from '@fortawesome/free-solid-svg-icons';
function Card() {
    return (
        <section id="three-card" class="three-card-p1">
<h2 class="text-left">Ready to get started?</h2>
            <div class="container">
                <div class="row ">
                 
                        <div class="icon-text-title">
                        <div class="icon-text-1 col-4">
                        <i class="fas fa-ChartLine ChartLine">  <FontAwesomeIcon icon={faChartLine} style={{ color: 'blue', marginRight: '10px' }}  /></i>
                        <h3 class="icon-title">Grow my Business whit foodcart</h3>
                        <p class="icon-para-text">Let us help you grow more </p>
                        <a href=""><button class="btn product-btn">Get Best Deal -</button></a>
                        </div>
                        <div class="icon-text-2 col-4 " >
                        <i class="fas fa-Bullhorn Bullhorn"><FontAwesomeIcon icon={faBullhorn} style={{ color: 'green', marginRight: '10px' }} />
</i>

                        </div>
                        <div class="icon-text-3 col-4">
                        <i class="fas fa-BookOpen BookOpen">   <FontAwesomeIcon icon={faBookOpen} style={{ color: 'orange' }}  />
</i>
                        </div>
</div>
                    </div>
         </div>

        </section>
    )
}

export default Card;