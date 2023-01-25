import React, { useEffect, useState } from "react"
import { connect, styled } from "frontity"
// import Link from "../link"
// import List from "../list"
import Loading from '../loading'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// import { jarallax, jarallaxVideo } from 'jarallax'




//import Image from "@frontity/components/image";

const HomePage = ({ state, actions, libraries }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const data = state.source.get(state.router.link)
  const [homepage, setHomepage] = useState(null)
  const [slider, setSlider] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const Html2React = libraries.html2react.Component
  

  useEffect(() => {
    let _homepage = state.source[data.type][data.id]

    _homepage.content.rendered = _homepage.content.rendered.replace(/frontity-container/g, "container")
    _homepage.content.rendered = _homepage.content.rendered.replace(/frontity-border-0/g, "border-0")
    // console.log(_homepage.content.rendered)
    setHomepage(_homepage)
    setSlider(_homepage.acf.sliders)
    console.log(_homepage.acf.sliders)

      runJarallax()
  }, [])

  
  const runJarallax = () => {
    // setTimeout(() => {
    //   const jarallax = React.lazy(() => import('jarallax'))
    //   jarallax(document.querySelectorAll('.cid-sULylFaPda'), {
    //     speed: 0.2
    //   })
      

    //   jarallax(document.querySelectorAll('.mbr-parallax-background'), {
    //     speed: 0.2
    //   })
    // }, 2000);

  }
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  }

  return data.isReady ? (
    <Content>

{/* <div>
      {slider.map((slider, index) => (
        <div key={index}>
          <img src={slider.image} alt={slider.title} />
          <p>{slider.title}</p>
        </div>
      ))}
    </div> */}

      <div id="carouselHome" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
        <div class="carousel-indicators">
        {slider.map((slider, index) => (
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to={index} class={`${index === activeIndex ? 'active' : ''}`} aria-current={` ${index === activeIndex ? 'true' : ''}`} aria-label={"Slide" +index}></button>
        ))}
          {/* <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
        </div>
        <div class="carousel-inner">
        {slider.map((slider, index) => (
            <div  key={index} 
          class={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleSlideChange(index)}
        >
              <img src={slider.image} alt={slider.title} class="d-block w-100" />
              <h5 dangerouslySetInnerHTML={{__html: slider.title}} />
            </div>
          ))}
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {homepage ? <Html2React html={homepage.content.rendered} /> : <Loading />}
      <div className="container mb-4">
        <div className="embla" ref={emblaRef} style={{ overflowX: 'hidden' }}>
          <div className="embla__container" >
            <div className="embla__slide slider-image item active css-xyig4j-props-css">
              <div className="slide-content">
                <div className="item-wrapper">
                  <div className="item-img">
                    <img
                      alt="Domino's Pizza, Kalbe, JCO, IFF"
                      className="frontity-lazy-image img-responsive"
                      loading="lazy"
                      src="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-2-600x600-1.jpg"
                      data-slide-to={0}
                      data-bs-slide-to={0}
                      srcSet="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-2-600x600-1.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-2-600x600-1-300x300.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-2-600x600-1-150x150.jpg"
                    // sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide slider-image item  css-xyig4j-props-css">
              <div className="slide-content">
                <div className="item-wrapper">
                  <div className="item-img">
                    <img
                      alt="Sika, Solaria, Nippon Paint, PROPAN, Jordan Bakery"
                      className="frontity-lazy-image img-responsive"
                      loading="lazy"
                      src="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-1-600x600-1.jpg"
                      data-slide-to={1}
                      data-bs-slide-to={1}
                      srcSet="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-1-600x600-1.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-1-600x600-1-300x300.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-1-600x600-1-150x150.jpg"
                    // sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide slider-image item  css-xyig4j-props-css">
              <div className="slide-content">
                <div className="item-wrapper">
                  <div className="item-img">
                    <img
                      alt="Asian Agri, Musim Mas, Indofood, BASF"
                      className="frontity-lazy-image img-responsive"
                      loading="lazy"
                      src="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-4-600x600-1.jpg"
                      data-slide-to={2}
                      data-bs-slide-to={2}
                      srcSet="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-4-600x600-1.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-4-600x600-1-300x300.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-4-600x600-1-150x150.jpg"
                    // sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide slider-image item  css-xyig4j-props-css">
              <div className="slide-content">
                <div className="item-wrapper">
                  <div className="item-img">
                    <img
                      alt="SANBE, Kino, Preston, BITAL, Kopi Janji Jiwa"
                      className="frontity-lazy-image img-responsive"
                      loading="lazy"
                      src="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-3-600x600-1.jpg"
                      data-slide-to={3}
                      data-bs-slide-to={3}
                      srcSet="https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-3-600x600-1.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-3-600x600-1-300x300.jpg, https://wp.bioplast.co.id/wp-content/uploads/2022/06/logo-logo-partner-3-600x600-1-150x150.jpg"
                    // sizes="(max-width: 600px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

    </Content >
  ) : <Loading />
}

export default connect(HomePage)

const Container = styled.div`
  
`

const Content = styled.div`
width: 100%;
position:relative;
.wp-block-group__inner-container {
  width: 100%;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px auto;
}
.hero-homepage {
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-bottom:50px;
  }
  .wp-block-columns {
    .wp-block-column {
      margin-bottom:2rem
    }
    align-items: center;
    .wp-block-button {
      .wp-block-button__link {
        background: var(--brand);  
        border:1px solid transparent;   
        border-color:var(--brand);  
        box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
        transition: all 0.3s ease;  
        margin-right: 0.5rem;  
        &:hover {
          color:var(--black);
          background:transparent;
        }
      }
    }
    .wp-block-button.is-style-outline {       
      .wp-block-button__link {
        background: transparent;
        border-color:var(--brand);     
        color:var(--brand);  
        &:hover {
          color:var(--black);
        }
      }
    }
  }
}

.home-services {
  background:#F8F8FA;
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  .wp-block-group__inner-container {
    .home-services-heading {
      max-width:539px;
      margin:0 auto;
      margin-bottom:3rem;
    }
    .home-services-grid {

      .wp-block-image {
        width: 62px;
        height: 62px;
        margin: 0 auto;
      }
      h5 {
        margin-bottom:1rem;
        margin-top:1rem;
      }
      p {
        position:relative;
      }
    }
  }
}
.home-services-two {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  .wp-block-group__inner-container {
    .wp-block-columns {
      .wp-block-column {
        ol {
          counter-reset: myOrderedCounter;
          padding-left:0;
          margin-top:2rem;
          li {
            list-style-type: none;
            position: relative;
            padding-left: 3rem;
            margin-bottom: 1rem;
            &:before {
              counter-increment: myOrderedCounter;
              content: counter(myOrderedCounter);
              position: absolute;
              background-color: var(--brand);
              border-radius: 50%;
              left: 0;
              top: 5px;
              width: 30px;
              height: 30px;
              text-align: center;
              color: var(--white);
              padding-top: 2.5px;
            }
          }
        }
      }
    }
  }
}
.home-cta {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  background:var(--brand);
  color:var(--white);
  .wp-block-group__inner-container {
    h2 {
      color:var(--white);
    }
    .wp-block-buttons {
      .wp-block-button {
        .wp-block-button__link {
          background: var(--white);  
          border:1px solid transparent;   
          border-color:var(--white);  
          box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
          transition: all 0.3s ease;  
          margin-right: 0.5rem;  
          color:var(--brand);
          &:hover {
            color:var(--white);
            background:transparent;
          }
        }
      }
      .wp-block-button.is-style-outline {       
        .wp-block-button__link {
          background: transparent;
          border-color:var(--white);     
          color:var(--white);  
          &:hover {
            background:var(--white);
            color:var(--brand);
          }
        }
      }
    }
  }
}
.home-team {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  .home-team-heading {
    .wp-block-group__inner-container {
      max-width:539px;
      margin:0 auto;
      margin-bottom:3rem;
    }
  }
  .wp-block-group__inner-container {
    .wp-block-columns {
      .wp-block-column {
        margin-bottom:1.5rem;
        p {
          margin-bottom: 0rem;
        }
      }
    }    
  }
}
.home-recent-blog {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  background:#F8F8FA;
  .home-recent-blog-heading {
    margin-bottom:3rem;
  }
  .wp-block-latest-posts {
    li {
      margin-bottom:2rem;
      .wp-block-latest-posts__featured-image {
        margin-bottom:1rem;
        width: 100%;
      }
      a {
        color:var(--black);
        transition: all 0.3s ease;  
        font-weight:500;
        margin-bottom: 0.5rem;
        display: block;
        &:hover {
          color:var(--brand);
        }
      }
      .wp-block-latest-posts__post-date {
        color: rgb(69 78 86);
      }
    }
  }
}
`
