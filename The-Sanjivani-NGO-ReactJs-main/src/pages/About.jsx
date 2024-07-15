import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Funds from "../components/Funds";
import PageHeader from "../components/PageHeader";
import "../css/About2.css"
// import "../css/about.css";
import aboutimage from "../assets/aboutimage.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <PageHeader title="About Us" path="/about" name="About Us" />
      {/* <About2/> */}

      <div>
        <section class="hero-1">
          <div class="heading">
            {/* <h1>About Us</h1> */}
          </div>
          <div class="container-1">
            <div class="hero-content-1">
              <h2>Welcome To Our Website </h2>
              <p>
                We At in the social welfare &amp; Development commitee readly
                wor with motto to empower society and transform lives to bring
                out the positive changes in the society. We aim to be helping
                hand toward everyone in society by organizing various event and
                activities throughout the year. Main strength of our commitee
                lies in equality and unity amongst every member. We are always
                ready to do someone a good turn to be good for society with no
                exceptations in return.
              </p>
              <button class="cta-btn-1">MEET THE TEAM</button>
            </div>
            <div class="hero-img-1">
              <img class="img" src={aboutimage} alt="About Image" />
            </div>
          </div>
        </section>
      </div>
      <Landing />
      <Funds />
      <Footer />
      <BackToTop />
    </>
  );
}
