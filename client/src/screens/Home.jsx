import React from 'react';
import Header from '../components/Header';
import Service from '../components/Service';

const Home = () => {
  return <div>
    <Header />
    <div id="carouselExampleFade" className="carousel slide carousel-fade carouselImg" data-bs-ride="carousel">

      <div className="carousel-inner curve1  " id='carousel'>
        <div className="carousel-item active" >
          <img src="images/bank1.jpg" className="d-block w-100  " style={{ filter: "brightness(35%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/bank2.jpg" className="d-block w-100 " style={{ filter: "brightness(35%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/bank3.jpg" className="d-block w-100 " style={{ filter: "brightness(35%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/bank5.jpg" className="d-block w-100 " style={{ filter: "brightness(35%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/bank6.jpg" className="d-block w-100 " style={{ filter: "brightness(35%)" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
      <h1 class="cardHeader">About Us</h1>
     
      <div class="card-body card card_shadow  ">
        <p class="card-text pCardText">Welcome to iSpark, a cutting-edge banking institution dedicated to providing
          exceptional
          financial services
          to our customers. At iSpark, we believe in leveraging the latest technology to provide our customers
          with a
          seamless and convenient banking experience.

          Our team of highly skilled professionals is committed to delivering world-class services that meet
          the
          unique financial needs of our customers. We understand that our success is closely tied to the
          success of
          our customers, and we go above and beyond to help them achieve their financial goals.

          At iSpark, we offer a wide range of banking services, including personal and business banking.

          We pride ourselves on our strong commitment to customer satisfaction. We take the time to understand
          our
          customers' unique financial situations and provide them with the guidance and support they need to
          make
          informed decisions about their finances.
          Thank you for choosing iSpark as your banking partner. We look forward to serving you and helping
          you
          achieve your financial goals.</p>
      </div>
    </div>

    <div class="container my-3 services">
      <h1 class="cardHeader">Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <Service
          img="images/service1.jpg"
          title="View All Customers"
          content="The View All Customers section of a iSpark bank is a feature that allow to
          view a list of all customers. This section typically includes details about each customer,
          such as their name, account number, account type, and account balance."
        />
        <Service
          img="images/service2.jpg"
          title="Transfer Money"
          content="The Transfer Money section of a iSpark bank is an essential feature that
          allows  to transfer money from one account to another  typically need to provide details such as account number and the amount to be transferred."
        />
        <Service
          img="images/service3.jpg"
          title="Transaction History"
          content="The Transaction History section of a iSpark bank is a valuable feature that
          allows  to view accounts activity over a specific period. This section typically includes details about every transaction made."
        />

      </div>
    </div>

  </div>
}

export default Home;