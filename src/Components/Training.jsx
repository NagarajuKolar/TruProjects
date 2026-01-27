import '../CSS/Training.css';
import { Link } from "react-router-dom";
import { trainings } from "../Utils/TrainingData";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Training({ selectedTraining }) {

  const visibleChips = selectedTraining ? [selectedTraining] : trainings;

  return (
    <section className="training-hero">
{/* 
      {selectedTraining && (
        <Link to="/internships" className="back-btn">
           Back to All Trainings
        </Link>
      )} */}

      <h1>
        {selectedTraining ? selectedTraining.title : "SUMMER INTERNSHIPS"}
      </h1>

      <div className="training-buttons">
        {visibleChips.map(item => (
          <Link
            key={item.slug} to={`/internships/${item.slug}`}
            className={`training-chip ${selectedTraining?.slug === item.slug ? "active" : ""}`}>
            {item.tag}
          </Link>
        ))}
      </div>

      <div className="divider" />

      <p className="subtitle">
        COMPLETE TRAINING ON TECHNOLOGY | PROJECT DEVELOPMENT
      </p>

      <div className="info-grid">

        <div className="info-box">
          <h3>Training Fee</h3>
          {selectedTraining ? (
            <p className='fee'>{selectedTraining.fee}</p>
          ) : (
            <>
              <div className="info-p">
                <p>One Day Internship : Rs. 3,500/-</p>
                <p>45 Days Internship : Rs. 6,500/-</p>

              </div>

            </>
          )}
        </div>

        <div className="info-box">
          <h4>
            {selectedTraining
              ? selectedTraining.months
              : "May June July"}
          </h4>
          <button className="register-btn">Register Now</button>
        </div>

        <div className="info-box">
          <h3>Contact Us</h3>
          <p>MANOJ: +91 9676190678</p>
          <div className="social-icons">
            <FaFacebookF className='fb-icon' />
            < FaWhatsapp className='whats-icon' />
            <FaLinkedinIn className='Link-icon' />
            <FaXTwitter className='twit-icon' />
          </div>
        </div>

      </div>

      <p className="city">HYDERABAD</p>

      <p className="city-address">
        407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
        Ameerpet, Hyderabad, India — Opposite Image Hospital &
        Beside KLM Fashion Mall.
      </p>

    </section>
  );
}

export default Training;
