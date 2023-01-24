import React from "react"
import { connect, styled } from "frontity"
import Link from "../link"
import footerBg from '../../assets/images/footer-bg.jpeg'
import footerLogo from '../../assets/images/logo-white.png'
import inLogo from '../../assets/icons/linkedin.png'
import igLogo from '../../assets/icons/ig.png'
import fbLogo from '../../assets/icons/facebook.png'


// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <div className='footer-wrapper-bg' style={{
      position: 'relative',
      backgroundImage: `url(${footerBg})`,
      backgroundColor: '#23419B'
    }}>
      <Container>
        <div className="row">
          <div className="col-12 col-lg-6 footer-widget widget-one">
            <img src={footerLogo} className="footer-logo" />
            <p className='font-weight-bold pt-4 px-4 mb-1'>Follow Us</p>

            <div className='d-flex flex-row align-items-center footer-socmed-wrapper'>
              <a className='footer-social-media' href="https://www.linkedin.com/company/pt-bioplast-unggul/">
                <img src={inLogo} className="socmed-logo" />
              </a>

              <a className='footer-social-media' href="https://www.instagram.com/bioplast.unggul/">
                <img src={igLogo} className="socmed-logo" />
              </a>

              <a className='footer-social-media' href="https://www.facebook.com/pabrikbioplast/">
                <img src={fbLogo} className="socmed-logo" />
              </a>

            </div>
           
          </div>
          <div className="col-12 col-md-3 col-lg-3 footer-widget widget-two">
            <h6 className="widget-title">Head Office &amp; Factory</h6>
            <p>
              Jl.Raya Pasar Kemis Km.3.5 No.81,<br />
              Tangerang, 15560 <br />
              T. +62-21-592 0505<br />
              F. +62-21-592 0459<br />
              E. contact@bioplast.co.id<br />
              www.bioplast.co.id

            </p>
          </div>
          <div className="col-12 col-md-3 col-lg-3 footer-widget widget-three">
            <h6 className="widget-title">Marketing Office</h6>
            <p>
              Ruko Icon 5 Business Park
              Blok E No. 3, BSD City<br />
              T. +62-21-592 0505<br />
              E. marketing@bioplast.co.id
            </p>

          </div>

        </div>

      </Container>

      {/* <img src={footerBg} /> */}
    </div>
  )
}

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer)

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
      font-weight: bold;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }

  .footer-logo {
    width: 40%;
  }

  @media only screen and max-width (720px) {
    .footer-wrapper-bg {
      display: none;
    }
  }
}
`
