import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <Container className="footer-icons">
          <a href="mailto:joao.lirio.04@gmail.com" className="lead text-decoration-none black footer-text fas fa-envelope"> joao.lirio.04@gmail.com </a>
          <i className="lead footer-text fas fa-phone-square"> +351 917868451 </i> 
          
        </Container>
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
