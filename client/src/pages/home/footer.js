import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Follow us for more...</h5>
                <p className="grey-text text-lighten-4">
                  Check out the <span>
                    <a href="https://github.com/nowmozillaclub/Course-Place/graphs/contributors"
                      style={{color:"yellow"}}
                    >
                      contributors for the code here!
                    </a>
                    </span>
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Artworks by...</h5>
                <ul>
                  <li><a style={{color:"yellow"}} href="https://freepik.com">
                    Freepik</a></li>
                  <li><a style={{color:"yellow"}} href="https://dribbble.com">
                    Dribbble</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright, enrollar
            <a className="grey-text text-lighten-4 right" href="https://github.com/nowmozillaclub">
              Our Github
            </a>
            </div>
          </div>
        </footer>
  );
}

export default Footer;