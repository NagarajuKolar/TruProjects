import React from 'react'
import { useParams, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import major from '../assets/major.png'
import '../CSS/Branchproject.css'
import Readmore from '../Components/Readmore';
import Locationstriper from '../Components/Locationstriper';
import { contentTemplate, splitParagraphs, formatContent } from '../Utils/ContentTemplate';
import { btechCities, mtechCities } from '../Utils/BranchlocationData';


function BranchProjectspage() {
    const { program, branch } = useParams();
    const programName = program === "btech" ? "B.Tech" : "M.Tech";
    const branchName = branch.toUpperCase();
    const pageData = {
        program: programName,
        branch: branchName,
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

    const cities = program === "btech" ? btechCities : mtechCities;
    const citylocations = cities.map(
        (city) => `${programName} ${branchName} Projects ${city}`
    );

    return (
        <>
            <div className="branch-banner">
                <h1>{programName} {branchName} Projects</h1>
            </div>

            <div className="project-type-section">
                <h2 className="section-heading">
                    PROJECT <span>TYPES</span>
                </h2>

                <div className="project-type-grid">

                    {/* Major */}
                    <div className="project-type-wrapper">
                        <div className="project-type-card">
                            <img src={major} alt="Major Projects" />
                            <h3>Major Projects</h3>
                        </div>

                        <Link
                            to={`/${program}/${branch}/major`}
                            className="view-btn"
                        >
                            View <FaArrowRight />
                        </Link>
                    </div>

                    {/* Mini */}
                    <div className="project-type-wrapper">
                        <div className="project-type-card">
                            <img src={major} alt="Mini Projects" />
                            <h3>Mini Projects</h3>
                        </div>

                        <Link
                            to={`/${program}/${branch}/mini`}
                            className="view-btn"
                        >
                            View <FaArrowRight />
                        </Link>
                    </div>

                </div>
            </div>

            <Readmore
                previewText={previewText}
                fullText={fullText} />

            <Locationstriper locations={citylocations} />


        </>
    )
}

export default BranchProjectspage