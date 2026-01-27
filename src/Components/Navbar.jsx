import React, { useState, useEffect } from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeDept, setActiveDept] = useState(null);
    const [activeLevel, setActiveLevel] = useState(null);
    const [activeDeptMtech, setActiveDeptMtech] = useState(null);
    const [activeLevelMtech, setActiveLevelMtech] = useState(null);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };



    const isMobile = window.innerWidth <= 1024;

    const toggleMenu = (menu) => {
        if (!isMobile) return;
        setActiveMenu(activeMenu === menu ? null : menu);
        setActiveDept(null);
        setActiveLevel(null);
    };

    const toggleDept = (dept) => {
        if (!isMobile) return;
        setActiveDept(activeDept === dept ? null : dept);
        setActiveLevel(null);
    };

    const toggleDeptMtech = (dept) => {
        if (!isMobile) return;
        setActiveDeptMtech(activeDeptMtech === dept ? null : dept);
        setActiveLevelMtech(null);
    };

    const toggleLevelMtech = (level) => {
        if (!isMobile) return;
        setActiveLevelMtech(activeLevelMtech === level ? null : level);
    };
    const toggleLevel = (level) => {
        if (!isMobile) return;
        setActiveLevel(activeLevel === level ? null : level);
    };


    const closeAll = () => {
        setMenuOpen(false);
        setActiveMenu(null);

        setActiveDept(null);
        setActiveLevel(null);

        setActiveDeptMtech(null);
        setActiveLevelMtech(null);
    };


    return (
        <>

            <div className="top-header">
                <div className="top-left">
                    <span>91-9676190678</span>
                    <span>info@truprojects.in</span>

                    <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>

                    <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>

                    <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>

                    <a href="https://www.youtube.com/account" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>

                    <a href="https://www.pinterest.com/login/" target="_blank" rel="noopener noreferrer">
                        <FaPinterestP />
                    </a>

                    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                <div className="top-right">
                    <button className="register-btn">
                        <Link to='/register'>Register Now</Link>
                    </button>
                </div>
            </div>

            <nav className="navbar" onMouseLeave={() => !isMobile && setActiveMenu(null)}>
                <div className="logo">
                    <img src={Logo} alt="Logo TruProject" />
                </div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" onClick={closeAll}>Home</Link>
                    <Link to="/about" onClick={closeAll}>About Us</Link>


                    <div className="dropdown-wrapper" onMouseEnter={() => !isMobile && setActiveMenu("btech")}>
                        <Link to="/btech" className="drop-btn" onClick={() => toggleMenu("btech")}>
                            B.Tech Projects {isMobile ? (activeMenu === "btech" ? <IoMdClose /> : <FaPlus />) : <FaChevronDown />}
                        </Link>

                        {!isMobile && activeMenu === "btech" && (
                            <div className="mega-menu">
                                <div className="mega-column">
                                    <h4 onClick={() => navigate("/btech/cse")}>CSE </h4>
                                    <Link to="/btech/cse/major">Major Projects</Link>
                                    <Link to="/btech/cse/mini">Mini Projects</Link>
                                </div>
                                <div className="mega-column">
                                    <h4 onClick={() => navigate("/btech/ece")}>ECE</h4>
                                    <Link to="/btech/ece/major">Major Projects</Link>
                                    <Link to="/btech/ece/mini">Mini Projects</Link>
                                </div>
                                <div className="mega-column">
                                    <h4 onClick={() => navigate("/btech/eee")}>EEE</h4>
                                    <Link to="/btech/eee/major">Major Projects</Link>
                                    <Link to="/btech/eee/mini">Mini Projects</Link>
                                </div>
                            </div>
                        )}

                        {isMobile && activeMenu === "btech" && (
                            <div className="mega-menu">
                                <div className="mega-column">
                                    <h4 onClick={() => toggleDept("cse")}>CSE {activeDept === "cse" ? <IoMdClose /> : <FaPlus />}</h4>
                                    {activeDept === "cse" && (
                                        <>
                                            <p onClick={() => toggleLevel("major")}>Major {activeLevel === "major" ? <IoMdClose /> : <FaPlus />}</p>
                                            {activeLevel === "major" && <Link to="/random-btech-cse-major" onClick={closeAll}>View Projects</Link>}
                                            <p onClick={() => toggleLevel("mini")}>Mini {activeLevel === "mini" ? <IoMdClose /> : <FaPlus />}</p>
                                            {activeLevel === "mini" && <Link to="/random-btech-cse-mini" onClick={closeAll}>View Projects</Link>}
                                        </>
                                    )}
                                </div>

                                <div className="mega-column">
                                    <h4 onClick={() => toggleDept("ece")}>ECE {activeDept === "ece" ? <IoMdClose /> : <FaPlus />}</h4>
                                    {activeDept === "ece" && (
                                        <>
                                            <p onClick={() => toggleLevel("major")}>Major {activeLevel === "major" ? <IoMdClose /> : <FaPlus />}</p>
                                            {activeLevel === "major" && <Link to="/random-btech-ece-major" onClick={closeAll}>View Projects</Link>}
                                            <p onClick={() => toggleLevel("mini")}>Mini {activeLevel === "mini" ? <IoMdClose /> : <FaPlus />}</p>
                                            {activeLevel === "mini" && <Link to="/random-btech-ece-mini" onClick={closeAll}>View Projects</Link>}
                                        </>
                                    )}
                                </div>

                                <div className="mega-column">
                                    <h4 onClick={() => toggleDept("eee")}>EEE {activeDept === "eee" ? <IoMdClose /> : <FaPlus />}</h4>
                                    {activeDept === "eee" && (
                                        <>
                                            <p onClick={() => toggleLevel("major")}>Major {activeLevel === "major" ? <IoMdClose /> : <FaPlus />}</p>
                                            {activeLevel === "major" && <Link to="/random-btech-eee-major" onClick={closeAll}>View Projects</Link>}
                                            <p onClick={() => toggleLevel("mini")}>Mini {activeLevel === "mini" ? <IoMdClose /> : <FaPlus />}</p>
                                            {activeLevel === "mini" && <Link to="/random-btech-eee-mini" onClick={closeAll}>View Projects</Link>}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>



                    <div className="dropdown-wrapper" onMouseEnter={() => !isMobile && setActiveMenu("mtech")}>
                        <Link to='/mtech'><button className="drop-btn" onClick={() => toggleMenu("mtech")}>
                            M.Tech Projects {isMobile ? (activeMenu === "mtech" ? <IoMdClose /> : <FaPlus />) : <FaChevronDown />}
                        </button>
                        </Link>


                        {!isMobile && activeMenu === "mtech" && (
                            <div className="mega-menu">
                                <div className="mega-column">
                                    <h4 onClick={() => navigate("/mtech/cse")}>CSE</h4>
                                    <Link to="/mtech/cse/major">Major Projects</Link>
                                    <Link to="/mtech/cse/mini">Mini Projects</Link>
                                </div>
                                <div className="mega-column">
                                    <h4 onClick={() => navigate("/mtech/ece")}>ECE</h4>
                                    <Link to="/mtech/ece/major">Major Projects</Link>
                                    <Link to="/mtech/ece/mini">Mini Projects</Link>
                                </div>
                                <div className="mega-column">
                                    <h4 onClick={() => navigate("/mtech/eee")}>EEE</h4>
                                    <Link to="/mtech/eee/major">Major Projects</Link>
                                    <Link to="/mtech/eee/mini">Mini Projects</Link>
                                </div>
                            </div>
                        )}


                        {isMobile && activeMenu === "mtech" && (
                            <div className="mega-menu">
                                <div className="mega-column">
                                    <h4 onClick={() => toggleDeptMtech("cse")}>
                                        CSE {activeDeptMtech === "cse" ? <IoMdClose /> : <FaPlus />}
                                    </h4>
                                    {activeDeptMtech === "cse" && (
                                        <>
                                            <p onClick={() => toggleLevelMtech("major")}>
                                                Major {activeLevelMtech === "major" ? <IoMdClose /> : <FaPlus />}
                                            </p>
                                            {activeLevelMtech === "major" && (
                                                <Link to="/random-mtech-cse-major" onClick={closeAll}>View Projects</Link>
                                            )}

                                            <p onClick={() => toggleLevelMtech("mini")}>
                                                Mini {activeLevelMtech === "mini" ? <IoMdClose /> : <FaPlus />}
                                            </p>
                                            {activeLevelMtech === "mini" && (
                                                <Link to="/random-mtech-cse-mini" onClick={closeAll}>View Projects</Link>
                                            )}
                                        </>
                                    )}
                                </div>

                                <div className="mega-column">
                                    <h4 onClick={() => toggleDeptMtech("ece")}>
                                        ECE {activeDeptMtech === "ece" ? <IoMdClose /> : <FaPlus />}
                                    </h4>
                                    {activeDeptMtech === "ece" && (
                                        <>
                                            <p onClick={() => toggleLevelMtech("major")}>
                                                Major {activeLevelMtech === "major" ? <IoMdClose /> : <FaPlus />}
                                            </p>
                                            {activeLevelMtech === "major" && (
                                                <Link to="/random-mtech-ece-major" onClick={closeAll}>View Projects</Link>
                                            )}

                                            <p onClick={() => toggleLevelMtech("mini")}>
                                                Mini {activeLevelMtech === "mini" ? <IoMdClose /> : <FaPlus />}
                                            </p>
                                            {activeLevelMtech === "mini" && (
                                                <Link to="/random-mtech-ece-mini" onClick={closeAll}>View Projects</Link>
                                            )}
                                        </>
                                    )}
                                </div>

                                <div className="mega-column">
                                    <h4 onClick={() => toggleDeptMtech("eee")}>
                                        EEE {activeDeptMtech === "eee" ? <IoMdClose /> : <FaPlus />}
                                    </h4>
                                    {activeDeptMtech === "eee" && (
                                        <>
                                            <p onClick={() => toggleLevelMtech("major")}>
                                                Major {activeLevelMtech === "major" ? <IoMdClose /> : <FaPlus />}
                                            </p>
                                            {activeLevelMtech === "major" && (
                                                <Link to="/random-mtech-eee-major" onClick={closeAll}>View Projects</Link>
                                            )}

                                            <p onClick={() => toggleLevelMtech("mini")}>
                                                Mini {activeLevelMtech === "mini" ? <IoMdClose /> : <FaPlus />}
                                            </p>
                                            {activeLevelMtech === "mini" && (
                                                <Link to="/random-mtech-eee-mini" onClick={closeAll}>View Projects</Link>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>


                    <Link to="/research" onClick={closeAll}>Research Paper Writing & Publishing</Link>
                    <Link to="/document-writing" onClick={closeAll}>Document Writing</Link>
                    <Link to="/internships" onClick={closeAll}>Summer Internships</Link>
                    <Link to="/contact" onClick={closeAll}>Contact Us</Link>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </div>
            </nav>

            <div className="bottom-navbar">

                <a href="tel:+919676190678" className="call-btn">
                    <FaPhoneAlt className="nav-phone-icon" /> CALL NOW
                </a>

                <a href="/register" className="register-btn">
                    <MdEditDocument className="nav-icon" /> REGISTER NOW
                </a>

                <a href="https://wa.me/919676190678" className="whatsapp-btn">
                    <FaWhatsapp className="nav-icon" /> WHATSAPP
                </a>

            </div>

            <button className={`scroll-top-btn ${show ? "show" : ""}`} onClick={scrollToTop}>
                <FaChevronUp />
            </button>


        </>
    );
}

export default Navbar;
