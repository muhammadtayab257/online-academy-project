import "../assets/css/footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3">MyLogo</h5>
              <p>123 Main Street, City, Country</p>
              <div className="social-icons"></div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 mb-4">
              <h5 className="mb-3">Newsletter</h5>
              <p>Subscribe to our newsletter for the latest updates.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
