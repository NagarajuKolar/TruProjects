import React, { useState } from 'react';
import '../CSS/Internshiptrack.css';
import { internshipTracks } from '../Utils/IntenshiptrackData';
import { FaPlusCircle } from "react-icons/fa";

function InternshipTracks({ selectedTrack }) {

  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (trackId, index) => {
    const key = `${trackId}-${index}`;

    setOpenAccordions(prev =>
      prev.includes(key)
        ? prev.filter(i => i !== key)
        : [...prev, key]
    );
  };

  const visibleTracks = selectedTrack
    ? internshipTracks.filter(track => track.id === selectedTrack)
    : internshipTracks;

  return (
    <section className="internship-tracks">

      <h2 className="section-title">
        Internship <span>Tracks</span>
      </h2>

      <div className={`tracks-grid ${selectedTrack ? "single-track" : ""}`}>


        {visibleTracks.map(track => (
          <div key={track.id} className="track-column">

            <div className="track-header">
              {track.name}
            </div>

            {track.items.map((item, idx) => {

              const key = `${track.id}-${idx}`;
              const isOpen = openAccordions.includes(key);

              if (item.type === "section") {
                return (
                  <div key={idx} className="section-row">
                    {item.title}
                  </div>
                );
              }

              return (
                <div key={idx} className="accordion-item">

                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(track.id, idx)}
                  >
                    <span>
                      Day - {item.day}: {item.title}
                    </span>

                    <span className="int-icon">
                      {isOpen ? "−" : <FaPlusCircle />}
                    </span>
                  </button>

                  <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                    <ol>
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ol>
                  </div>

                </div>
              );
            })}

          </div>
        ))}

      </div>

    </section>
  );
}

export default InternshipTracks;
