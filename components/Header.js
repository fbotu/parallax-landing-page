import React from 'react';
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Button } from './Button';
import { MenuItems } from './MenuItems';
import Image from 'next/image';
import Logo from '../public/logo.jpg';
import styled from 'styled-components';


const Navbar = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 1.5rem; 
  a { 
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 1rem; 
  }
  @media only screen and (min-width: 1400px) {
    padding: 0 1.5rem; 
  }
`;
const NavMenu = styled.ul`
  display: flex;
  justify-content: end;
  justify-items: flex-end;
  list-style: none;
  width: 60vw;
  gap: 0;
  margin-left: 3rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    gap: 1.8rem;
    margin-right: 3rem;
  }
  @media only screen and (min-width: 1400px) {
    gap: 4rem;
    margin-right: 6rem;
  }
`;
const NavMenuItem = styled.li`
   @media (min-width: 1024px) {
    a { 
    font-size: 1.5rem;
    }
  }
  @media (min-width: 1400px) {
    a { 
    font-size: 1.6rem;
    }
  }
`;
const NavMenuMobile = styled.ul`
    z-index: 1000;
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    width: 100%;
    height: auto;
    position: absolute;
    top: 85px;
    left: -0%;
    opacity: 1;
    transition: all 0.5s ease-out;
    background-color: #800020;
    color: white;
    padding: 1.5rem 0;

    @media only screen and (min-width: 768px) {
    display: none;
    }
`;
const NavMenuItemMobile = styled.li`
  padding: 0.5rem 0;
  `;

const NavMenuIcon = styled.i`
  color: black;
  margin-right: 1rem;
  font-size: 1.6rem;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

function Header() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked);

  return (
      <Navbar>
        <Image 
          src={Logo} 
          alt="Logo Image" 
          width={100}
          height={100}
        />
        <div onClick={handleClick}>
            <NavMenuIcon >
              {clicked ? <FaTimes /> : <FaBars />}
            </NavMenuIcon>
        </div>
        <NavMenu>
            {MenuItems.map((item, index) => {
                return(
                    <NavMenuItem key={index}>
                        <Link className={item.cName} href={item.url}>
                            {item.title}
                        </Link>
                    </NavMenuItem>
                );
            })}
        </NavMenu>
        { clicked &&
        <NavMenuMobile>
            {MenuItems.map((item, index) => {
                return(
                    <NavMenuItemMobile key={index}>
                        <Link className={item.cName} href={item.url}>
                            {item.title}
                        </Link>
                    </NavMenuItemMobile>
                );
            })}
        </NavMenuMobile> 
        }

        {/* <MenuItems /> */}
         <Button>{/* <Link to="/sign-up" className="btn">Sign Up</Link> */}Sign Up</Button>
      </Navbar>
    );
}

export default Header;
