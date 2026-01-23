import React from 'react'

function Locationstriper({ locations }) {
    if (!locations || locations.length === 0) return null;
    return (
        <section className="locations-flexx">
            <div className="location-outer">
                <div className="locations-innerr">
                    {locations.map((city, index) => (
                        <span className="location-item" key={index}>
                            {city}
                            <span className="pipe"> |</span>
                        </span>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Locationstriper