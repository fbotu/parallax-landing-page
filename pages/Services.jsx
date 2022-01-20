import Link from 'next/link';
import React, { useState, useEffect } from 'react'
/* STYLES */
import styles from '../styles/Services.module.scss'

function Services() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    const [navbar, setNavbar = false] = useState(false);

    const Listener = (action) =>
    useEffect(() => {
        window.addEventListener('scroll', action)

    return () => removeEventListener('scroll', action)
    }, []);

    Listener(handleScroll)

    /* MENU ITEM ACTIVE */
    const [menuItem1Active, setMenuItem1Active] = useState(false);
    const [menuItem2Active, setMenuItem2Active] = useState(false);
    const [menuItem3Active, setMenuItem3Active] = useState(false);

    const IfSt = (condition, action) => {
        condition ? action(true) : action(false);
    }  
    
    const changeMenuItem1 = () => {IfSt(
        window.pageYOffset > 10 && window.pageYOffset < 900,
        setMenuItem1Active
        )}
/* Section 1 */
    // const changeMenuItem1 = () => {
    //     if (window.pageYOffset > 10 && window.pageYOffset < 900) {
    //         setMenuItem1Active(true);
    //     } else {
    //         setMenuItem1Active(false);
    //     }
    // }
    Listener(changeMenuItem1);
  
/* Section 2 */
    const changeMenuItem2 = () => {
        if (window.pageYOffset > 900 && window.pageYOffset < 1800) {
            setMenuItem2Active(true);
        } else {
            setMenuItem2Active(false);
        }
    }
    Listener(changeMenuItem2);
    
/* Section 3 */
    const changeMenuItem3 = () => {
        if (window.pageYOffset > 1800) {
            setMenuItem3Active(true);
        } else {
            setMenuItem3Active(false);
        }
    }
    Listener(changeMenuItem3);
 
/* Set Navbar Class */
    const changeNavbar = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    Listener(changeNavbar);

/* Console Logs */
    console.log("Section 1 " + menuItem1Active);
    console.log("Section 2 " + menuItem2Active);
    console.log("Section 3 " + menuItem3Active);

    console.log("Y Offset = " + offsetY);
     
  return <div className={styles.threeSections}>
           
            <nav className={navbar ? styles.menuActive : styles.menu }>
                <Link href="/Services/#one" >
                    <a className={menuItem1Active ? styles.sectionActive : styles.section}>
                        Goto Section 1
                    </a>
                    </Link>
                <Link href="/Services/#two">
                   <a className={menuItem2Active ? styles.sectionActive : styles.section}>
                        Goto Section 2
                   </a> 
                </Link>
                <Link href="/Services/#three">
                    <a className={menuItem3Active ? styles.sectionActive : styles.section}>
                        Goto Section 3
                    </a>   
                </Link>

            </nav>
            <section className={styles.one} id="one">
                <h1>
                    Section 1
                </h1>
            </section>
            <section className={styles.two} id="two">
                <h1>
                    Section 2
                </h1>
            </section>
            <section className={styles.three} id="three">
                <h1>
                    Section 3
                </h1>
            </section>
      
        </div>;
        
}

export default Services;
