import Link from 'next/link';
import { useState, useEffect } from 'react'
import { Card } from '../components/Card';
/* STYLES */
import styles from '../styles/Services.module.scss'

function Services() {

    const Listener = (action) =>
    useEffect(() => {
        window.addEventListener('scroll', action)

    return () => removeEventListener('scroll', action)
    }, []);

    const IfSt = (condition, action) => {
        condition ? action(true) : action(false);
    }  

    const [navbar, setNavbar = false] = useState(false);


/* MENU ITEM ACTIVE */
    const [menuItem1Active, setMenuItem1Active] = useState(false);
    const [menuItem2Active, setMenuItem2Active] = useState(false);
    const [menuItem3Active, setMenuItem3Active] = useState(false);

/* Section 1 */
    const changeMenuItem1 = () => {IfSt(
        window.pageYOffset > 10 && window.pageYOffset < 900,
        setMenuItem1Active
        )}
    Listener(changeMenuItem1);
  
/* Section 2 */
    const changeMenuItem2 = () => {IfSt(
        window.pageYOffset > 900 && window.pageYOffset < 1800,
        setMenuItem2Active
        )}
    Listener(changeMenuItem2);
    
/* Section 3 */
    const changeMenuItem3 = () => {IfSt(
        window.pageYOffset > 1800,
        setMenuItem3Active
        )}
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

// /* Console Logs */
//     console.log("Section 1 " + menuItem1Active);
//     console.log("Section 2 " + menuItem2Active);
//     console.log("Section 3 " + menuItem3Active);

//     console.log("Y Offset = " + offsetY);
    return (
        <div className={styles.threeSections}>
           
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

            <section id="one">
                <h1>
                    Section 1
                </h1> 
                <div className={styles.one}>
                    <Card 
                        header="Card Header"
                        src="https://res.cloudinary.com/fbwebdev/image/upload/v1642269322/Pheori/Images/sound-design_l8uszj.webp"
                        alt="card image"
                        title="Card Title"
                        text="This card has some text"
                        footer="Card Footer"
                    />  
                </div>
            </section>
            <section id="two">
                <h1>
                    Section 2
                </h1>   
                <div className={styles.two}>
                  
                </div>
            </section>
            <section id="three">
                <h1>
                    Section 3
                </h1>
                <div className={styles.three}>
                    
                </div>
            </section>
      
        </div>);        
}

export default Services;
