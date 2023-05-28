import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavMenu: React.FC = () => {
  return (
    <Menu>
      <li>
        <a href="/">FAQ</a>
      </li>
      <li>
        <a href="http://docs.luckyswap.io" target="_blank">
          About
        </a>
      </li>
      <li>
        <a href="/">Support</a>
      </li>
    </Menu>
  )
}

const Menu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-left: 60px;

  @media (max-width: 991px) {
    display: none;
  }

  li {
    display: inline-block;
    padding: 0 10px;

    a {
      position: relative;
      display: block;
      cursor: pointer;
      padding: 8px 0;
      color: rgb(152, 148, 148);
      text-decoration: none;

      &:hover {
        color: #fff;
        text-decoration: none;

        &:before {
          background: #fff;
          width: 100%;
          transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        &:after {
          background: transparent;
          width: 100%;
          transition: 0s;
        }
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: -2px;
        background: #fff;
      }

      &:before {
        left: 0;
      }

      &:after {
        right: 0;
        background: #fff;
        transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
    }
  }
`

export default NavMenu
