import { useEffect } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Driver2 from '../../images/Driver2.jpeg'
import deliveryguy from '../../images/deliveryguy.jpg'
import mansigningbox from '../../images/mansigningbox.jpg'
import Driver from '../../images/Driver.jpeg'
import shippingbox from '../../images/shippingbox.jpg'
import envelop from '../../images/envelop.jpg'
import deliveryman from '../../images/deliveryman.jpg'
import airfreight from '../../images/deliveryman.jpg'
import deliveryguywithcustomer from '../../images/deliveryguywithcustomer.jpg'



const WebSlider = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleCaptions');
        
        if (carouselElement && window.bootstrap) {
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 2000, // Adjust the time between slides (in milliseconds)
                wrap: true,     // Allow the carousel to repeat
            });
    
            return () => {
                carousel.dispose();
            };
        }
    }, [window.bootstrap]);    
    

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mansigningbox} className="d-block w-100" alt="Wild Landscape"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={airfreight} className="d-block w-100" alt="Camera"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={shippingbox} className="d-block w-100" alt="Exotic Fruits"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default WebSlider;
