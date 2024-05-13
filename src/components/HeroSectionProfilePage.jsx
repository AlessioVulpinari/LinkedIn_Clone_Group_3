import { Button, Card, Col, Container, Row } from "react-bootstrap"

const HeroSectionProfilePage = () => {
  return (
    <Card className='text-bg-dark rounded my-2'>
      <Card.Img
        variant='top'
        src='https://images.unsplash.com/photo-1715464502545-090ee1dc122f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='img-fluid'
      />
      <Card.Body>
        <Card.Title>Alessio Vulpinari</Card.Title>
        <Card.Subtitle>Junior Full-Stack Developer</Card.Subtitle>
        <Card.Text className='mb-2 text-muted'>EPICODE</Card.Text>
        <Card.Text>Santarcangelo di Romagna, Emilia Romagna, Italia </Card.Text>
        <Card.Text>Informazioni di Contatto </Card.Text>
        <Card.Text>33 follower - 32 collegamenti </Card.Text>

        <Row className='my-2'>
          <Col xs={12} lg={"auto"}>
            <Button variant='primary' className='me-1 rounded-pill w-100 mb-2-xs mb-0-lg'>
              Disponibile per
            </Button>
          </Col>
          <Col xs={10} lg={"auto"}>
            <Button variant='outline-primary' className='me-1 rounded-pill'>
              Aggiungi sezione del profilo
            </Button>
          </Col>
          <Col xs={2} lg={"auto"}>
            <Button variant='outline-light' className='me-1 rounded-pill'>
              Altro
            </Button>
          </Col>
        </Row>
        <Container className='bg-secondary rounded mt-3'>
          <Row>
            <Col xs={11}>
              <Row>
                <Col xs={12}>Disponibile a lavorare</Col>
                <Col xs={12}>Ruoli di Programmatore di videogichi, ...</Col>
                <Col xs={12}>Mostra Dettagli</Col>
              </Row>
            </Col>
            <Col xs={1} className='text-end'>
              <i className='bi bi-pencil' />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default HeroSectionProfilePage
