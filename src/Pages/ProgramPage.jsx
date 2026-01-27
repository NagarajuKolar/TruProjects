import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../CSS/Programpage.css'
import cse from '../assets/cse.png';
import eee from '../assets/eee.png';
import civil from '../assets/civil.png';
import banner from '../assets/banner.png'
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { contentTemplate } from '../Utils/ContentTemplate';
import { splitParagraphs } from '../Utils/ContentTemplate';
import { formatContent } from '../Utils/ContentTemplate';
import Readmore from '../Components/Readmore';
import Locationstriper from '../Components/Locationstriper';

function ProgramPage() {
    const { program } = useParams();
    const programConfig = {
        btech: {
            label: "B.Tech",
            title: "B.Tech Projects",
        },
        mtech: {
            label: "M.Tech",
            title: "M.Tech Projects",
        },
        ieee: {
            label: "IEEE",
            title: "IEEE Projects",
        },
    };
    const programInfo = programConfig[program];
    const title = programInfo?.title || "Projects";

    const branches = [
        { name: "CSE", slug: "cse", image: cse },
        { name: "ECE", slug: "ece", image: cse },
        { name: "EEE", slug: "eee", image: eee },
        { name: "CIVIL", slug: "civil", image: civil },
        { name: "MECH", slug: "mech", image: civil },
    ];
    const locationsData = {
        btech: [
            "B.Tech Projects Vijayawada",
            "B.Tech Projects Anantapur",
            "B.Tech Projects Bangalore",
            "B.Tech Projects Chennai",
            "B.Tech Projects Guntur",
            "B.Tech Projects Bangalore",
            "B.Tech Projects Chennai",
            "B.Tech Projects Guntur",
        ],
        mtech: [
            "M.Tech Projects Hyderabad",
            "M.Tech Projects Bangalore",
            "M.Tech Projects Chennai",
            "M.Tech Projects Pune",
            "M.Tech Projects Mumbai",
            "M.Tech Projects Noida",
            "M.Tech Projects Coimbatore",
            "M.Tech Projects Pune",
            "M.Tech Projects Mumbai",
            "M.Tech Projects Noida",
            "M.Tech Projects Coimbatore",
        ],
        ieee:[
            "IEEE Projects Chennai",
            'IEEE Projects Ananthapur',
            "IEEE Projects Bangalore",
            "IEEE Projects Guntur",
            "IEEE Projects Kakinada",
            "IEEE Projects Tirupati",
            'IEEE Projects Vijayawada',
            'IEEE Projects Vizag',
            "IEEE Projects Delhi"

        ]
    };
    const pageData = {
        program: programInfo?.label || "",
        branch: "",
        type: "",
    };


    const previewText = formatContent(
        contentTemplate.preview,
        pageData
    ).trim();

    const formattedBody = formatContent(
        contentTemplate.body,
        pageData
    );

    const fullText = splitParagraphs(formattedBody);

    const locations = locationsData[program] || [];
    return (
        <>

            <div className="program-banner">
                <h1>{title}</h1>
            </div>

            <div className="program-container">
                <h2 className="section-title">
                    {programInfo?.label} <span>BRANCHES</span>
                </h2>



                <div className="branch-grid">
                    {branches.map((branch) => (
                        <div className="branch-card">
                            <div className="branch-icon">
                                <img src={branch.image} alt={branch.name} />
                            </div>

                            <h3>{branch.name}</h3>

                            <Link to={`/${program}/${branch.slug}`} className="pro-view-progrm">
                                <button className="pro-view-btn">
                                    View
                                    <span className="pro-view-icon">
                                        <MdOutlineNavigateNext />
                                    </span>
                                </button>
                            </Link>

                        </div>

                    ))}
                </div>
            </div>

            <Readmore
                previewText={previewText}
                fullText={fullText} />

            <Locationstriper locations={locations} />




        </>
    )
}

export default ProgramPage