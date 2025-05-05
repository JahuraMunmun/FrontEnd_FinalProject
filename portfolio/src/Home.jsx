import Header from './Header';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import photo from './photo/photo.png';

const Home = () => {
  return (
    <div>
      <Header />

      <Container className="mt-4 py-4 ">
        <Row className="align-items-center">
      <Col md={6} className="text-center text-md-start">
        <h1 className="display-4 fw-bold">Hi, I'm Jahura Akter Munmun</h1>
        <h4 className="text-primary mb-3">Front-End Developer</h4>
        <p className="mb-4">
          I build clean, responsive, and interactive web applications using React, Bootstrap, and more.
        </p>
        <Button
          variant="primary"
          href="https://github.com/JahuraMunmun"
          target="_blank"
          className="me-2"
        >
          Visit GitHub
        </Button>
        <Button variant="outline-secondary" href="/your-cv.pdf" download>
          Download CV
        </Button>
      </Col>

      <Col md={6} className="text-center">
  <img
    src={photo}
    alt="Jahura Akter Munmun"
    className="img-fluid"
    style={{
      maxWidth: '300px',
      height: 'auto',
      borderRadius: '8px',
      objectFit: 'cover'
    }}
  />
</Col>
    </Row>

    <h3 className="mt-5 mb-3">Skills</h3>
        <p>HTML, CSS, JavaScript, Bootstrap, React</p>

      
<h3 className="mt-5 mb-3 py-2">Featured Projects</h3>
<Row className="bg-light">
  <Col md={3}>
    <Card className="mb-4" style={{ height: '300px' }}>
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text class="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Card.Text>
        <Button variant="outline-primary" href="#">View</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={3} className="mt-5">
    <Card className="mb-4" style={{ height: '300px' }}>
      <Card.Body>
        <Card.Title>Project 2</Card.Title>
        <Card.Text class="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </Card.Text>
        <Button variant="outline-primary" href="#">View</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={3}>
    <Card className="mb-4"style={{ height: '300px' }}>
      <Card.Body>
        <Card.Title>Project 3</Card.Title>
        <Card.Text class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
        <Button variant="outline-primary" href="#">View</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={3} className="mt-5">
    <Card className="mb-4" style={{ height: '300px' }}>
      <Card.Body>
        <Card.Title>Project 4</Card.Title>
        <Card.Text class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
        <Button variant="outline-primary" href="#">View</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>

      </Container>
    </div>
  );
};

export default Home;
