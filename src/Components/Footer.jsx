import React from 'react'
import '../CSS/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">


        <div className="footer-container">


          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              Welcome to Tru Projects. Tru Projects are being introduced to make
              a long way from its beginnings. We are the one source and efficient
              student oriented service provider for IT projects.
            </p>

            <h3 className="contact-title">Contact</h3>

            <div className="contact-item">
              <i className="fas fa-home"></i>
              <span>
                407, 4th Floor, Pavani Prestige (R.S Brothers) Building,
                Ameerpet, Opposite Image Hospital & Beside KLM Fashion Mall.
                City: Hyderabad, Telangana – 500016, India
              </span>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>91-9676190678</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@truprojects.in</span>
            </div>

            <div className="footer-socials">
              <a href="https://www.facebook.com/truprojects1/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="https://www.linkedin.com/company/tru-projects/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="https://www.youtube.com/channel/UCcwZ26sm2QtHjilZjCENIAg" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>

              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>

          </div>


          <div className="footer-col footer-links">
            <h3>Quick Links</h3>

            <div className="footer-links-grid">
              <ul>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/internships">Trainings</Link></li>

                  <li><Link to="/btech">B.Tech Projects</Link></li>
                  <li><Link to="/mtech">M.Tech Projects</Link></li>

                  <li><Link to="/btech/cse/projects/mini">B.Tech CSE Mini Projects</Link></li>
                  <li><Link to="/btech/cse/projects/major">B.Tech CSE Major Projects</Link></li>

                  <li><Link to="/mtech/cse/projects/mini">M.Tech CSE Mini Projects</Link></li>
                  <li><Link to="/mtech/cse/projects/major">M.Tech CSE Major Projects</Link></li>

                  <li><Link to="/btech">Final Year Projects</Link></li>
                  <li><Link to="/ieee">IEEE Projects</Link></li>
                </ul>

              </ul>

              <ul>
                <ul>
                  <li><Link to="/btech/ece/projects/mini">B.Tech ECE Mini Projects</Link></li>
                  <li><Link to="/btech/ece/projects/major">B.Tech ECE Major Projects</Link></li>

                  <li><Link to="/mtech/ece/projects/mini">M.Tech ECE Mini Projects</Link></li>
                  <li><Link to="/mtech/ece/projects/major">M.Tech ECE Major Projects</Link></li>

                  <li><Link to="/btech/eee/projects/mini">B.Tech EEE Mini Projects</Link></li>
                  <li><Link to="/btech/eee/projects/major">B.Tech EEE Major Projects</Link></li>

                  <li><Link to="/mtech/eee/projects/mini">M.Tech EEE Mini Projects</Link></li>
                  <li><Link to="/mtech/eee/projects/major">M.Tech EEE Major Projects</Link></li>

                  <li><Link to="/btech/civil/projects/mini">B.Tech Civil Mini Projects</Link></li>
                  <li><Link to="/btech/civil/projects/major">B.Tech Civil Major Projects</Link></li>
                </ul>

              </ul>

              <ul>
                <li><Link to="/mtech/civil/mini">M.Tech Civil Mini Projects</Link></li>
                <li><Link to="/mtech/civil/major">M.Tech Civil Major Projects</Link></li>

                <li><Link to="/btech/mechanical/mini">B.Tech Mechanical Mini Projects</Link></li>
                <li><Link to="/btech/mechanical/major">B.Tech Mechanical Major Projects</Link></li>

                <li><Link to="/mtech/mechanical/mini">M.Tech Mechanical Mini Projects</Link></li>
                <li><Link to="/mtech/mechanical/major">M.Tech Mechanical Major Projects</Link></li>
                <li>MBA Marketing Projects</li>
                <li>MBA HR Projects</li>
                <li>MBA Finance Projects</li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

        </div>


        <div className="footer-bottom">
          <p>© Copyright – 2025 TruProjects. All Rights Reserved.</p>
          <p><strong>Visitors Count:</strong> 1429990</p>
          <p className="disclaimer">
            Tru Projects is not associated or affiliated with IEEE in any way.
            The IEEE projects mentioned here are student projects inspired from
            IEEE publications and not official IEEE products.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer