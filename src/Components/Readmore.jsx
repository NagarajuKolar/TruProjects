import React from 'react'
import { useState } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
function Readmore({ previewText, fullText }) {
        const [expanded, setExpanded] = useState(false);

        return (
            <div className="readmore-wrapper">
                <p className="readmore-text">
                    {previewText}
                    {!expanded && "..."}
                </p>

                {expanded && (
                    <div className="readmore-full">
                        {fullText.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                )}

                <button
                    className="readmore-btn"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Read less" : "Read more"}
                    {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>
            </div>
        );
    }



export default Readmore