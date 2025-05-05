import { Container, Row, Col, Card } from 'react-bootstrap';
import photo from './photo/photo.png'; 

const About = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center fw-bold py-4">About Me</h2>
      <Row className="align-items-center">
        
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Card className="shadow-sm border-0">
            <Card.Img
              variant="top"
              src={photo}
              alt="Jahura Akter Munmun"
              style={{ height: '320px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <Card.Body>
              <Card.Text className="text-muted fst-italic">
              “Continuous learning fuels my curiosity in tech.”
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <div className="p-3">
            <p className="fs-5">
              Hello! I'm <strong>Jahura Akter Munmun</strong>, a Computer Science student at <strong>IUBAT-International University of Business Agriculture and Technology</strong> with a passion for building clean, responsive, and user-focused web applications.
              I specialize in front-end development and have growing interests in <strong>data science</strong> and <strong>networking</strong>.
            </p>

            <hr className="my-4" />
            <Row className="mb-4 text-start" >
            <Col md={6}>
            <p><strong>Name:</strong> Jahura Akter Munmun</p>
    <p><strong>Age:</strong> 23</p>
    <p><strong>Phone:</strong> +8801746296421</p>
    <p><strong>Email:</strong> johramunmun3449@gmail.com</p>
  </Col>
  <Col md={6}>
    <p><strong>Occupation:</strong> Computer Science Student</p>
    <p><strong>Address:</strong> Uttara, Dhaka, Bangladesh</p>
    <p><strong>Nationality:</strong> Bangladeshi</p>
  </Col>
</Row>

<hr className="my-4" />


            <h5 className="mt-4">Soft Skills</h5>
            <ul className="fs-6" style={{ listStyleType: 'none'}}>
              <li>Strong collaboration and teamwork abilities</li>
              <li>Analytical and problem-solving mindset</li>
              <li>Effective communication skills</li>
              <li>Time management and adaptability</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
