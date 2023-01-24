import React, { useState, useRef, useEffect } from "react"
import { Global, css, connect, styled, Head } from "frontity"
import Switch from "@frontity/components/switch"
import Header from "./header/header"
import Footer from "./footer/footer"
import List from "./list"
import Post from "./post"
import Page from "./pages/page"
import HomePage from "./pages/homepage"
import Jobs from "./pages/jobs"
import Loading from "./loading"
import Title from "./title"
import PageError from "./page-error"
import BootstrapCss from './styles/bootstrap.css'
import wpBakeryStyle from "../assets/css/wpbakery.min.css"
import mbrStyle from "../assets/css/mbr-additional.css"
import customStyle from "../assets/css/custom.css"
import bootstrapGridStyle from "../assets/css/bootstrap-grid.min.css"
import remixIconStyle from '../assets/css/remixicon.css'
// import test from "./styles/test.css"
import fontRegular from '../assets/fonts/Montserrat-Regular.ttf'
import fontBold from '../assets/fonts/Montserrat-Bold.ttf'
import Profile from './pages/profile'
import Career from './pages/career'
import Contactus from './pages/contactus'
import Products from './pages/products/products'
import Script from './script'
import { fixCss } from './base/CssHelper'
import ProductSingle from './pages/products/product-single'
import MobileMenu from '../components/header/menu'
import { HamburgerIcon, CloseIcon } from '../components/header/menu-icon'
import arrowDown from '../assets/icons/arrow-down.png'
import Link from '../components/link'
import settings from '../../../../frontity.settings'

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.

  const [scrollPosition, setScrollPosition] = useState(0)
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const [productMenu, setProductMenu] = useState([])
  const [rerender, setRerender] = useState(1)
  const data = state.source.get(state.router.link)

  const handleScroll = () => {
    const position = window.scrollY
    // console.log(position);
    setScrollPosition(position)
  }

  useEffect(() => {
    let productIndex = settings.packages[0].state.theme.menu.findIndex(x => Array.isArray(x.submenu))
    var _items = []
    for (const item of settings.packages[0].state.theme.menu[productIndex].submenu) {
      // console.log(item.link)
      _items.push(item.link)
    }

    setProductMenu(_items)

  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])
  const { isMobileMenuOpen } = state.theme

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />


      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={fixCss(BootstrapCss)} />
      <Global styles={fixCss(bootstrapGridStyle)} />
      <Global styles={fixCss(wpBakeryStyle)} />
      <Global styles={fixCss(mbrStyle)} />
      <Global styles={fixCss(customStyle)} />

      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <div className={`head-container ${scrollPosition > 90 ? 'scrolled' : ''}`}>
        <div className='head-content'>
          <div className='head-wrapper'>
            <Header />
          </div>

          <MenuToggle onClick={actions.theme.toggleMobileMenu}>
            {/* {isMobileMenuOpen ? ( */}
            <>
              {/* Add some style to the body when menu is open,
            to prevent body scroll */}
              {/* <Global styles={{ body: { overflowY: "hidden" } }} /> */}
              {!isMobileMenuOpen ? <HamburgerIcon color="black" width="35px" height="25px" /> : <CloseIcon color="black" size="20px" />}
            </>
            {/* ) : (
          <HamburgerIcon color="black" width="35px" height="25px" />
        )} */}
          </MenuToggle>

        </div>

        {isMobileMenuOpen ? (
          <div className={'header-menu-mobile open'}>
            {state.theme.menu.map(({ name, link, submenu }) => {
              const isCurrentPage = state.router.link === link


              return (
                <div className={`nav-menu-item-mobile`} key={name}>
                  {Array.isArray(submenu) ? (
                    <span onClick={() => setOpenSubmenu(!openSubmenu)} aria-current={isCurrentPage ? 'page' : undefined}>{name} <img src={arrowDown} className="arrow-down" /></span>
                  ) :
                    (

                      <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                        {name} {submenu ? <img src={arrowDown} className="arrow-down" /> : null}
                      </Link>
                    )
                  }

                  {Array.isArray(submenu) ? (
                    <div className={`submenu-mobile ${openSubmenu ? 'open' : ''}`}>
                      {submenu.map((_s, i) => {
                        return (

                          <Link key={'sub' + i + _s.name} link={_s.link}>{_s.name}</Link>
                        )
                      }
                      )}
                    </div>
                  ) : null}
                </div>
              )

            })}
          </div>
        ) : <div className='header-menu-mobile'></div>}
      </div>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <div className={`main-content ${scrollPosition > 90 ? 'scrolled' : ''}`}>
        <Switch>
          <Loading when={data.isFetching} />
          <HomePage when={data.isHome} />
          <Jobs when={data.isAwsmJobOpenings} />
          <Profile when={data.isPage && data.route === '/profile/'} />
          <Career when={data.isPage && data.route === '/career/'} />
          <Contactus when={data.isPage && data.route === '/contact-us/'} />
          {/* <Products when={data.isPage && data.route === '/pet-chem-bottles/'} /> */}
          <Products when={data.isPage && Array.isArray(productMenu) && productMenu.includes(data.route)} />
          <ProductSingle when={data.route.slice(0, 8) === '/product'} />
          <PageError when={data.isError} />
        </Switch>
      </div>
      <FooterContainer>
        <Footer />
      </FooterContainer>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></Script>

    </>
  )
}

export default connect(Theme)

const globalStyles = css`
  :root {
    --brand: #5B3BE8;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
  }
  body {
    margin: 0;
    color:var(--bodycolor);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    min-height: -webkit-fill-available;
  }
  html {
    height: -webkit-fill-available;
  },
  a,
  a:visited {  
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color:var(--black);
  }
  p {
    line-height:24px;
    font-size:18px;
  }
  // #root {
  //   display:flex;
  //   flex-direction: column;
  //   height: auto;
  // }
  .container {
    max-width: 1200px;
    width:100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section{
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
`

const FooterContainer = styled.div`
  width:100%;
  background:var(--brand);
  // margin-top: auto;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;

  @media only screen and (max-width: 720px) {
    margin-top: 60px;
  }
`
const MenuToggle = styled.button`
  background: transparent;
  border: 0;
  color: var(--white);
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  outline:0;
  transition: all 0.3s ease;
  &:focus {
    outline:0;
  }
  .opensvg, .closesvg {
    transition: all 0.3s ease;
  }
  &:hover {
    .opensvg {
      color:var(--brand);
    }
    .closesvg {
      color:var(--white);
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
