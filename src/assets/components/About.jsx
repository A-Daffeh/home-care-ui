import React from 'react';
import holdingBox from '../../images/holdingBox.jpeg';

const About= () => {
  return (
    <div className="container">
      <div className="card my-4">
        <div className="row g-0 a-content">
          <div className="col-md-4" style={{ borderRight: '2px solid #dee2e6' }}>
            <img 
              src={holdingBox} 
              alt="Trendy Pants and Shoes" 
              className="img-fluid rounded-start" 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">About Us </h5>
              <p className="card-text">
              At Pro Shipping, we prioritize customer satisfaction and strive to exceed expectations. 
              Experience the difference with Pro Shipping and let us simplify your shipping experience 
              like never before.
              </p>

              <p className="card-text">
             <strong>Ship worldwide with Pro shipping and get your package in no time with Pro Shipping! </strong> 
              </p>

              <h5 className="card-title text-primary">Shipments</h5>
              <p className="card-text">
              Ship within the  <strong>  <i>US, Africa, Asia, Europe, Middle East, </i> </strong> etc., and receive your package in no time. Experience a seamless and top-notch
                 shipping experience when you ship with Pro Shipping.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div className="col">
          <div className="card">
            <img 
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" 
              className="card-img-top" 
              alt="Hollywood Sign on The Hill" 
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img 
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" 
              className="card-img-top" 
              alt="Palm Springs Road" 
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
