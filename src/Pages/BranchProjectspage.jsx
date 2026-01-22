import React from 'react'
import { useParams, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import major from '../assets/major.png'
import '../CSS/Branchproject.css'

function BranchProjectspage() {
    const { program, branch } = useParams();
    const programName = program === "btech" ? "B.Tech" : "M.Tech";
    const branchName = branch.toUpperCase();

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


        </>
    )
}

export default BranchProjectspage