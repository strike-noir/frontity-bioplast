import React from "react"
import { connect, styled } from "frontity"
import Link from "../link"
import arrowDown from '../../assets/icons/arrow-down.png'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  return (
    <NavContainer>
      {state.theme.menu.map(({ name, link, submenu }) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link
        return (
          <div className={`nav-menu-item`} key={name}>
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name} {submenu ? <img src={arrowDown} className="arrow-down" /> : null}
            </Link>

            {Array.isArray(submenu) ? (
              <div className="submenu">
                {submenu.map((_s, i) => {
                  console.log('current',  state.router.link, _s.link)
                  return (
                    <Link key={'sub' + i + _s.name} link={_s.link} className={`${state.router.link === _s.link ? 'active' : ''}`}>{_s.name}</Link>
                  )
                })}
              </div>
            ) : null}
          </div>
        )
      })}
    </NavContainer>
  )
}

export default connect(Nav)

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  .arrow-down {
    width: 18px;
    height: auto;
  }

  .nav-menu-item {
    position: relative;
    padding: 0;
    margin: 0 16px;
    color: #007fc5;
    text-transform: uppercase;
    font-size: 1.1em;
    box-sizing: border-box;
    flex-shrink: 0;
    font-weight: 500 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .submenu {
      position: absolute;
      background: white;
      max-height: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      opacity: 0;
      width: 200%;
      left: -50%;
      top: 100%;

      a {
        width: 100%;
        padding: 0.6em 1em;
        border-bottom: 1px solid #e6e6e6;
        display: block;
        color: #007fc5;
        background: white;
        transition: all 0.25s ease;

        &:hover {
        color: white;
        background: black;
        transition: all 0.25s ease;
       }
      }

      a.active {
        color: black;
      }

      
    }

    &:hover .submenu {
      max-height: 80vh;
      visibility: visible;
      opacity: 1;
      transition: all 0.3s ease;
       
    }

    & > a {
      display: inline-block;
      line-height: 2em;
      color: #007fc5;
      transition: all 0.3s ease;
      /* Use for semantic approach to style the current link */
      &[aria-current="page"] {
        color: black;
      }
      &:hover {
        color: black;
      }
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;

      &:after {
        content: "";
        display: inline-block;
        width: 24px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: var(--brand);
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    color: var(--black);
    transition: all 0.3s ease;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color: var(--brand);
    }
    &:hover {
      color: var(--brand);
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`
