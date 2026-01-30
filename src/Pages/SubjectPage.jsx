import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { subjectProjects } from '../Utils/TechnologyData';
import '../CSS/Subject.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { contentTemplate, splitParagraphs, formatContent } from '../Utils/ContentTemplate';
import Readmore from '../Components/Readmore';
import Locationstriper from '../Components/Locationstriper';
import { btechCities, mtechCities } from '../Utils/BranchlocationData';

function SubjectPage() {
    const { program, branch, type, subject, city } = useParams();
    const programName = program === "btech" ? "B.TECH" : "M.TECH";
    const branchName = branch.toUpperCase();
    const typeName = type === "major" ? "MAJOR" : "MINI";
    const technologyName = subject.split("-").join(" ").toUpperCase();

    const readableProgram =
        program === "btech" ? "B.Tech" : "M.Tech";

    const readableBranch = branch.toUpperCase();

    const readableType =
        type === "major" ? "Major" : "Mini";

    const readableTechnology = subject
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const projects = subjectProjects[subject] || [];

    const pageData = {
        program: readableProgram,
        branch: "",
        type: type,
        subject: readableTechnology
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
        (city) => `${programName} ${type} ${readableTechnology} Projects ${city}`
    );


    return (
        <>

            <div className="domain-banner">
                <h1>
                    {programName}  {typeName} {technologyName} PROJECTS
                </h1>
            </div>

            <section className="subject-section">
                <h2 className="section-title">{technologyName}</h2>

                <table className="subject-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Abstract/Pdf</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.length > 0 ? (
                            projects.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
                                            View  <i className="fa-solid fa-download"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: "center" }}>
                                    No projects available yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            <section className="youtube-cta">
                <div className="youtube-cta-container">

                    <div className="youtube-cta-box">
                        <p>
                            Our Youtube channel is a leading source of expert-driven and
                            actionable educational content. Explore hundreds of videos
                            featuring experts explaining topics aimed at getting us big ideas
                            and core skills.
                        </p>

                        <button className="youtube-btn">
                            <span className="btn-text">Visit Our Channel</span>
                            <span ><FaRegCirclePlay className="btn-icon" /></span>

                        </button>
                    </div>

                </div>
            </section>

            <section className="para">

                <p>
                    Are you a Computer Science student pursuing <b>{readableProgram}</b> and looking for an Academic Project?
                    No worries, <span>www.TruProjects.in</span> is a one-stop destination. We are equipped with a wide range of project ideas
                    which also includes <b>{readableProgram} {readableBranch} {readableType} {readableTechnology}</b> projects.
                    As academic projects play an important role in every <b>{readableProgram}</b> student's educational journey,
                    the major preference of <b>{readableProgram} {readableBranch}</b> students is <b>{readableTechnology}</b> live projects.
                    The predominant demand of <b>{readableProgram} {readableBranch}</b> is <b>{readableTechnology}</b> final year projects offered by TruProjects,
                    which are majorly <b>IEEE {readableTechnology}</b> Projects.
                </p>

                <p>
                    We have been rated as one of the best institutes in providing <b>{readableProgram}</b> academic
                    <b> {readableBranch} {readableTechnology}</b> projects. TruProjects offers <b>{readableTechnology}</b> live projects with Source Code and Document,
                    as well as <b>{readableProgram} {readableBranch} {readableTechnology}</b> projects for III Year Students.
                    If you are searching for Latest <b> IEEE {readableTechnology}</b> projects or Trending
                    <b>{readableTechnology} {readableProgram} {readableBranch}</b> projects, then truprojects.in is the correct space.
                </p>

                <p>
                    Whether it is a <b>{readableProgram} {readableBranch}</b> academic <b>{readableTechnology}</b> project or IEEE
                    <b> {readableBranch} {readableTechnology}</b> projects, truprojects.in is your best Project Consultant.
                    Please visit the site <span>www.truprojects.in</span> to have a glance at the list of projects for downloading.
                </p>

            </section>

            <Readmore
                previewText={previewText}
                fullText={fullText} />

            <Locationstriper
                locations={citylocations}
                basePath={`/${program}/${branch}/${type}/${subject}`}
                useQuery
            />






        </>
    )
}

export default SubjectPage