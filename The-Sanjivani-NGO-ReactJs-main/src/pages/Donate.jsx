import React from 'react';
import Card from './Card';
import axios from 'axios';
import '../css/donate.css';
import PageHeader from '../components/PageHeader.jsx'
import loadScript from '../utils/loadScript';
import Footer from '../components/Footer.jsx'
// import  BackToTop from '../components/BackToTop.jsx'

const Donate = () => {
  const checkoutHandler = async (amount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    try {
      const { data: { key } } = await axios.get('http://localhost:4000/api/getkey');
      const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', { amount });

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Yahova Yire Foundation',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: 'http://localhost:4000/api/paymentverification',
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#3399cc'
        },
        method: 'upi', // Example of specifying a method; adjust as needed
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error during checkout:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
    <div>
    <PageHeader title={"Donate Now"} path={"/donate"} name={"Donate"} />
      {/* <Card amount={5000} checkoutHandler={checkoutHandler} /> */}
      {/* <Card amount={500} checkoutHandler={checkoutHandler} /> */}

      <div className="donations">
        <div className="container">
          <div className="donate">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="donate-content">
                  <div className="section-header">
                    <p>Donate Now</p>
                    <h2>Let's donate to needy people for better lives</h2>
                  </div>
                  <div className="donate-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non. Aliquam metus tortor, auctor id gravida, viverra quis sem. Curabitur non nisl nec nisi maximus. Aenean convallis porttitor. Aliquam interdum at lacus non blandit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="donate-form">
                  <form>
                    <div className="control-group">
                      <input id='name' type="text" className="form-control" placeholder="Name" required autoComplete='name' />
                    </div>
                    <div className="control-group">
                      <input id='email' type="email" className="form-control" placeholder="Email" required autoComplete='email' />
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <button type="button" className="btn-donate" onClick={() => checkoutHandler(100)}>
                        Donate ₹100
                      </button>
                      <button type="button" className="btn-donate" onClick={() => checkoutHandler(200)}>
                        Donate ₹200
                      </button>

                      <button type="button" className="btn-donate" onClick={() => checkoutHandler(300)}>
                        Donate ₹300
                      </button>
                    </div>
                    <div>
                      {/* <button className="btn-donate" type="submit">Donate Now</button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>

    <Footer></Footer>
</>
    
  );
};

export default Donate;
