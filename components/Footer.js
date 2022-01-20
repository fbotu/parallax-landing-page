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

const NavFooter = styled.footer`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  font-size: medium;
`;
const NavFooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
 `;
const NavFooterImage = styled.image`
  padding-left: 1rem;
  padding-top: 0px;
`;

export default function Footer() {
    return (
        <div>
        <NavFooter>
          <NavFooterLink
            href="https://francisbotu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Powered by</h2>
            <NavFooterImage>
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </NavFooterImage>
          </NavFooterLink>
        </NavFooter>
        </div>
    )
}
