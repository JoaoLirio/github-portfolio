import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="p-3 text-center ">
      <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
      <p className="lead text-center"> Feel free to email me or call me.</p>
      <Container className="footer-icons">
        <p className="lead footer-text m-auto">
          <a href="mailto:joao.lirio.04@gmail.com" className="text-decoration-none fas fa-envelope"> joao.lirio.04@gmail.com </a>
        </p>
        <p className="lead footer-text m-auto">
          <a href="tel:+351917868451" className="text-decoration-none fas fa-phone"> (+351) 917868451 </a>  
        </p> 
        
      </Container>
    </footer>
  );
};

export default Footer;
