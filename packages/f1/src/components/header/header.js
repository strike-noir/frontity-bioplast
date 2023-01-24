import React, { useState, useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "../link"
import Nav from "./nav"
import MobileMenu from "./menu"
import logo from '../../assets/images/logo.png'

const Header = ({ state }) => {
const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.scrollY;
    // console.log(position);
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollPosition]);
  return (
    <>
      <BrandContainer>
        <StyledLink link="/">
          <img src={logo} className={`logo-brand ${scrollPosition > 90 ? 'scrolled' : ''}`} />
        </StyledLink>
      </BrandContainer>
      <Nav />
    </>
  )
}

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header)

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight:800;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color:var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color:var(--black);
  }

  .logo-brand {
    height: 60px;
    transition: all 0.2s ease;
  }

  .logo-brand.scrolled {
    height: 45px;
    transition: all 0.2s ease;
  }

  @media only screen and (max-width: 720px) {
    .logo-brand {

      height: 60px;
    }
  }
`
