import React from "react";
import Image1 from "../../assets/images/images1.jpg";
import Image2 from "../../assets/images/imgage2.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div>
      <section className="property" id="property">
        <div className="container">
          <p className="section-subtitle">Properties</p>

          <h2 className="h2 section-title">Featured Listings</h2>

          <div className="property-list has-scrollbar row">
            <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Image1}
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </Link>

                <div className="card-badge green">Beds Available</div>

                <div className="banner-actions ">
                  <button className="banner-actions-btn d-flex align-items-center">
                    <ion-icon name="location"></ion-icon>
                    <address>Electronic city</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>₹11,500</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <Link to="">Dozo Alexa</Link>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, harum.
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹11,500</span>
                  </li>

                  <li className="card-item">
                    <strong>2 Share </strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹12,500</span>
                  </li>

                  <li className="card-item">
                    <strong>1 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹15,500</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <div>
                    <p className="author-name">
                      <Link to="">Dozo PVT Lim</Link>
                    </p>

                    <p className="author-title">Pg-Rentals</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
              
              <a href="#service" className="btn mb-2 mx-2">
                View Phone No.
              </a>
              <a href="#service" className="btn otherbtn mb-2 ">
                Contanct Owner
              </a>
            </div>
            <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Image1}
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </Link>

                <div className="card-badge orange">Fast Filling</div>

                <div className="banner-actions ">
                  <button className="banner-actions-btn d-flex align-items-center">
                    <ion-icon name="location"></ion-icon>
                    <address>Electronic city</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>₹11,500</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <Link to="">Dozo Alexa</Link>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, harum.
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹11,500</span>
                  </li>

                  <li className="card-item">
                    <strong>2 Share </strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹12,500</span>
                  </li>

                  <li className="card-item">
                    <strong>1 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹15,500</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <div>
                    <p className="author-name">
                      <Link to="">Dozo PVT Lim</Link>
                    </p>

                    <p className="author-title">Pg-Rentals</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
              
              <a href="#service" className="btn mb-2 mx-2">
                View Phone No.
              </a>
              <a href="#service" className="btn otherbtn mb-2 ">
                Contanct Owner
              </a>
            </div>
            <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Image1}
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </Link>

                <div className="card-badge green">Beds Available</div>

                <div className="banner-actions ">
                  <button className="banner-actions-btn d-flex align-items-center">
                    <ion-icon name="location"></ion-icon>
                    <address>Electronic city</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>₹11,500</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <Link to="">Dozo Alexa</Link>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, harum.
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹11,500</span>
                  </li>

                  <li className="card-item">
                    <strong>2 Share </strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹12,500</span>
                  </li>

                  <li className="card-item">
                    <strong>1 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹15,500</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <div>
                    <p className="author-name">
                      <Link to="">Dozo PVT Lim</Link>
                    </p>

                    <p className="author-title">Pg-Rentals</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
              
              <a href="#service" className="btn mb-2 mx-2">
                View Phone No.
              </a>
              <a href="#service" className="btn otherbtn mb-2 ">
                Contanct Owner
              </a>
            </div>
            <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Image1}
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </Link>

                <div className="card-badge green">Beds Available</div>

                <div className="banner-actions ">
                  <button className="banner-actions-btn d-flex align-items-center">
                    <ion-icon name="location"></ion-icon>
                    <address>Electronic city</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>₹11,500</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <Link to="">Dozo Alexa</Link>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, harum.
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹11,500</span>
                  </li>

                  <li className="card-item">
                    <strong>2 Share </strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹12,500</span>
                  </li>

                  <li className="card-item">
                    <strong>1 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹15,500</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <div>
                    <p className="author-name">
                      <Link to="">Dozo PVT Lim</Link>
                    </p>

                    <p className="author-title">Pg-Rentals</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
              
              <a href="#service" className="btn mb-2 mx-2">
                View Phone No.
              </a>
              <a href="#service" className="btn otherbtn mb-2 ">
                Contanct Owner
              </a>
            </div>
            <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10">
              <figure className="card-banner">
                <Link to="">
                  <img
                    src={Image1}
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </Link>

                <div className="card-badge green">Beds Available</div>

                <div className="banner-actions ">
                  <button className="banner-actions-btn d-flex align-items-center">
                    <ion-icon name="location"></ion-icon>
                    <address>Electronic city</address>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="camera"></ion-icon>

                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <ion-icon name="film"></ion-icon>

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>₹11,500</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <Link to="">Dozo Alexa</Link>
                </h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, harum.
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹11,500</span>
                  </li>

                  <li className="card-item">
                    <strong>2 Share </strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹12,500</span>
                  </li>

                  <li className="card-item">
                    <strong>1 Share</strong>

                    <ion-icon name="bed-outline"></ion-icon>

                    <span>₹15,500</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <div>
                    <p className="author-name">
                      <Link to="">Dozo PVT Lim</Link>
                    </p>

                    <p className="author-title">Pg-Rentals</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <ion-icon name="resize-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button className="card-footer-actions-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                </div>
              </div>
              
              <a href="#service" className="btn mb-2 mx-2">
                View Phone No.
              </a>
              <a href="#service" className="btn otherbtn mb-2 ">
                Contanct Owner
              </a>
            </div>

            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
