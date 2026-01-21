import React from 'react'
import { useState, useEffect } from 'react';
import '../CSS/Home.css';
import ban1 from '../assets/ban1.png'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import {FiLayers} from "react-icons/fi";
import { LuClipboardList} from "react-icons/lu";
import {  MdOutlineArticle } from "react-icons/md";

function Home() {
    const images = [
        ban1,
        "https://picsum.photos/id/1016/800/400",
        "https://picsum.photos/id/1018/800/400",
        "https://picsum.photos/id/1019/800/400",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const services = [
        { title: "B.Tech Projects", icon: <FaGraduationCap /> },
        { title: "M.Tech Projects", icon: <FiLayers /> },
        { title: "Mini Projects", icon: <FaProjectDiagram /> },
        { title: "Major Projects", icon: <LuClipboardList /> },
        { title: "IEEE Projects", icon: <FaBook /> },
        { title: "Bulk Sale", icon: <FaFileAlt /> },
        { title: "Paper writing & Publishing", icon: <MdOutlineArticle /> },
        { title: "Document writing with plagiarism", icon: <FaFileAlt /> },
        { title: "Summer Internships", icon: <FaUsers /> },
        { title: "Trainings", icon: <FaChalkboardTeacher /> },
    ];
    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className="slider">
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
                        <div className="service-card" key={index}>
                            <div className="icon">{item.icon}</div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="about-section">

            </section>
        </>
    )
}

export default Home