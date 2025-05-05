import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className="mt-5 bg-light">
      <h2 className="mb-4 py-4">Contact Me</h2>
      <Row>
        <Col md={5} className="mb-4 mt-5">
          <div className="mb-3 d-flex align-items-center">
            <FaMapMarkerAlt className="me-2 text-primary" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <FaPhone className="me-2 text-primary" />
            <span>+8801746296421</span>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <FaEnvelope className="me-2 text-primary" />
            <span>johramunmun3449@gmail.com</span>
          </div>
          
        </Col>

        <Col md={7}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message..." />
            </Form.Group>

            <Button variant="primary" type="submit" disabled>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
