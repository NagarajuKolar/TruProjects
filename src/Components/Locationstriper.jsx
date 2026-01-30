import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function Locationstriper({ locations, basePath, useQuery = false }) {
  const { city } = useParams();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const queryCity = params.get("city");

  if (!locations?.length) return null;

  return (
    <section className="locations-flexx">
      <div className="location-outer">
        <div className="locations-innerr">
          {locations.map((text, index) => {
            const cityName = text.trim().split(" ").pop();
            const slug = cityName.toLowerCase();

            const isActive = useQuery? queryCity === slug: city === slug || location.pathname === `${basePath}/${slug}`;

            const linkpath = useQuery? `${basePath}?city=${slug}`: `${basePath}/${slug}`;

            return (
              <span key={index} className={`location-item ${isActive ? "active" : ""}`}>
                <Link to={linkpath}>{text}</Link>
                <span className="pipe"> |</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Locationstriper;
