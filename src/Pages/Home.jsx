import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import ban1 from '../assets/ban1.png'
import ban2 from '../assets/ban2.png'
import ban3 from '../assets/ban3.png'
import ban4 from '../assets/ban4.png'
import mobBanner1 from '../assets/mobBan.png';
import mobBanner2 from '../assets/mobBan2.png';
import mobBanner3 from '../assets/mobBan3.png';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import tech1 from '../assets/tech1.png'
import tech2 from '../assets/tech2.png'
import tech3 from '../assets/tech3.png'
import tech4 from '../assets/tech4.png'
import tech5 from '../assets/tech5.png'
import tech6 from '../assets/tech6.png'
import Testimonials from '../Components/Testimonials';
import service1 from '../assets/serv1.png'
import service2 from '../assets/serv2.png'
import service3 from '../assets/serv3.png'
import service4 from '../assets/serv4.png'
import service5 from '../assets/serv5.png'
import service6 from '../assets/serv6.png'
import service7 from '../assets/serv7.png'
import service8 from '../assets/serv8.png'
import service9 from '../assets/serv9.png'
import service10 from '../assets/serv10.png'
import aboutimage from '../assets/about.png'

function Home() {
    const desktopImages = [ban1, ban2, ban3];

    const mobileImages = [mobBanner1, mobBanner2, mobBanner3];

    const [openIndexes, setOpenIndexes] = useState([0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const intervalRef = useRef(null);

    const touchstartX = useRef(null)
    const handleStartTouch = (e) => {
        touchstartX.current = e.touches[0].clientX;
    }
    const handleTouchEnd = (e) => {
        if (!touchstartX.current) return;

        const diff = touchstartX.current - e.changedTouches[0].clientX;

        if (diff > 50) nextSlide();
        if (diff < -50) handlePrev();

        touchstartX.current = null;
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const images = isMobile ? mobileImages : desktopImages;


    const handleToggle = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };
    const aboutdata = [
        {
            title: "About Us",
            type: "paragraph",
            content: [
                "Welcome to Tru Projects. Tru Projects is being introduced to make a long way from its beginnings. We are the one source and efficient student oriented service provider for IT projects.",
                "We expertise and are the best mutually proclaimed platform for Academic Live Projects, for students of B.Tech, M.Tech, MBA, MCA. We are dedicated to giving you the best of IT projects, with a focus on Quality, Dependability, Structure and much more."
            ]
        },
        {
            title: "Vision",
            type: "paragraph",
            content: [
                "To create a world of opportunities in which the students could explore and identify their domain of passion and transform it into a dream and booming career."
            ]
        },
        {
            title: "Mission",
            type: "paragraph",
            content: [
                "We strive to create and nurture personal effectiveness by developing and offering an array of novel and diverse project ideas in support of our commitment to help students make a difference, while contributing to organizational enrichment."
            ]
        },
        {
            title: "Objectives",
            type: "list",
            content: [
                "Help students to do their academic projects incorporate environment enabling them to analyze if the theoretical aspects they learned in universities are connected to the real world.",
                "Truprojects does its best to offer projects in advanced/current topics assisting students to stay ahead of their counterparts, expose to present technological updates, and thus decide if the profession they are in is the right choice.",
                "Truprojects endeavors to put every student in an environment that aids him or her to learn new skills, meet and network with people, improve communication and management abilities, and obtain a comprehensive practical experience.",
                "After all these, the core objective of Truprojects is to get the students hired by the best companies in the industry."
            ]
        }
    ];


    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const services = [
        { title: "B.Tech Projects", image: service1, path: "/btech" },
        { title: "M.Tech Projects", image: service2, path: "/mtech" },
        { title: "Mini Projects", image: service3, path: "/mini-projects" },
        { title: "Major Projects", image: service4, path: "/major-projects" },
        { title: "IEEE Projects", image: service5, path: "/ieee" },
        { title: "Bulk Sale", image: service6, path: "/bulk-sale" },
        { title: "Paper writing & Publishing", image: service7, path: "/research" },
        { title: "Document writing with plagiarism", image: service8, path: "/document-writing" },
        { title: "Summer Internships", image: service9, path: "/internships" },
        { title: "Trainings", image: service10, path: "/internships" },
    ];



    const technologies = [
        { id: 1, title: "Machine Learning", image: tech1 },
        { id: 2, title: "Artificial Intelligence", image: tech2 },
        { id: 3, title: "Deep Learning", image: tech3 },
        { id: 4, title: "Image Processing", image: tech4 },
        { id: 5, title: "Python", image: tech5 },
        { id: 6, title: "Java", image: tech6 },
        { id: 7, title: "Big Data", image: tech1 },
        { id: 8, title: "Block Chain", image: tech2 },
        { id: 9, title: "Cloud Computing", image: tech1 },
        { id: 10, title: "Data Mining", image: tech2 },
    ];
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [currentSlide]);

    return (
        <>
            <div className="slider"
                onTouchStart={handleStartTouch}
                onTouchEnd={handleTouchEnd}>
                {images.map((img, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
                        <img src={img} alt="slider" />
                    </div>

                ))}
                <div className="dots">
                    {images.map((_, index) => (
                        <span key={`dot-${index}`} className={index === currentSlide ? 'dot active' : 'dot'}
                            onClick={() => setCurrentSlide(index)}></span>
                    ))}
                </div>
                <FaChevronLeft className="arrow left" onClick={handlePrev} />
                <FaChevronRight className="arrow right" onClick={nextSlide} />
            </div>

            <section className="services">
                <h2 className="services-title">
                    <span>OUR </span> SERVICES
                </h2>

                <div className="services-grid">
                    {services.map((item, index) => (
                        <Link to={item.path} className="service-card" key={index}>
                            <div className="service-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <p>{item.title}</p>

                        </Link>
                    ))}
                </div>
            </section>

            <section className="about-section">
                <div className="about-container">


                    <div className="about-left">
                        <img src={aboutimage} alt="About" />
                    </div>


                    <div className="about-right">
                        <h2 className="about-title">
                            ABOUT <span>US</span>
                        </h2>
                        {aboutdata.map((item, index) => {
                            const isOpen = openIndexes.includes(index);

                            return (
                                <div className="about-accordion" key={index}>
                                    <button
                                        className="about-accordion-header"
                                        onClick={() => handleToggle(index)}
                                    >
                                        {item.title}
                                        <span>{isOpen ? "−" : <FaPlusCircle />}</span>
                                    </button>

                                    <div
                                        className={`about-accordion-body about-box ${isOpen ? "open" : ""
                                            }`}
                                    >
                                        {item.type === "paragraph" &&
                                            item.content.map((text, i) => (
                                                <p key={i}>{text}</p>
                                            ))}

                                        {item.type === "list" && (
                                            <ul className="about-list">
                                                {item.content.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>


            <section className="technology">
                <h2 className="tech-title">
                    LATEST <span>TECHNOLOGIES</span>
                </h2>

                <div className="tech-grid">
                    {technologies.map((tech) => (
                        <div className="tech-card" key={tech.id}>
                            <img src={tech.image} alt={tech.title} />

                            <div className="tech-content">
                                <h3>{tech.title}</h3>

                                <div className="tech-links">
                                    <a href="#">Mini Project</a>
                                    <a href="#">Major Project</a>
                                    <a href="#">View Project Titles</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Testimonials />





        </>
    )
}

export default Home