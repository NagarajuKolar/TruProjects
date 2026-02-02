import React, { useState } from 'react'
import { languageData } from '../Utils/Domaindata'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { contentTemplate, splitParagraphs, formatContent } from '../Utils/ContentTemplate';
import Readmore from '../Components/Readmore';
import Locationstriper from '../Components/Locationstriper';
import { btechCities, mtechCities } from '../Utils/BranchlocationData';
import '../CSS/Domaintype.css'

function DomainPage() {
    const { program, branch, type, city } = useParams();
    const programName = program === "btech" ? "B.Tech" : "M.Tech";
    const branchName = branch.toUpperCase();
    const typeName = type === "major" ? "Major" : "Mini";
    const domains = languageData[program]?.[branch]?.[type] || [];
    const pageData = {
        program: programName,
        branch: branchName,
        type: type,
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
        (city) => `${programName} ${branchName} ${type} Projects ${city}`
    );


    return (
        <>
            <div className="domain-banner">
                <h1>
                    {programName} {branchName} {typeName} Projects{" "}
                    {city && city.toUpperCase()}
                </h1>

            </div>

            <section className="domain-section">
                <h2 className="section-title">
                    LANGUAGES
                </h2>

                <div className="domain-grid">
                    {domains.map((item) => (
                        <Link key={item.slug} to={`/${program}/${branch}/${type}/${item.slug}`}
                            className="domain-card">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <Readmore
                previewText={previewText}
                fullText={fullText} />

            <Locationstriper
                locations={citylocations}
                basePath={`/${program}/${branch}/projects/${type}`} />



        </>
    )
}

export default DomainPage