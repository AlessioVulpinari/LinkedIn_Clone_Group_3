import { Button, Card, Col, Container, Row } from "react-bootstrap"

const HeroSectionProfilePage = () => {
  return (
    <Card className='text-bg-dark rounded my-2'>
      <div className='position-relative'>
        <Card.Img
          variant='top'
          src='https://images.unsplash.com/photo-1715464502545-090ee1dc122f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='img-fluid'
        />
        <div className='rounded-circle profileContainer'>
          <img
            className='profilePick'
            src='https://images.unsplash.com/photo-1715114064378-b97c82f06856?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
      </div>

      <Card.Body className='topMargin'>
        <Row>
          <Col xl={7} lg={6} md={12} sm={6} xs={12}>
            <Card.Title>Alessio Vulpinari</Card.Title>
            <Card.Subtitle>Junior Full-Stack Developer</Card.Subtitle>
            <Card.Text className='mb-2'>EPICODE</Card.Text>
            <Card.Text>
              Santarcangelo di Romagna, Emilia Romagna, Italia <span> Informazioni di Contatto </span>
            </Card.Text>
            <Card.Text>33 follower - 32 collegamenti </Card.Text>
          </Col>
          <Col xl={5} lg={6} md={0} sm={6} xs={0} className='d-none d-sm-block d-md-none d-lg-block'>
            <div className='d-flex'>
              <img
                src='https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1723680000&v=beta&t=zg1tmhGtXpbPBAmTL_24SZvTaU27NltAj4R2tzePhg4'
                alt='Epicode Logo'
                width={32}
                height={32}
                className='me-1'
              />
              <span>Epicode</span>
            </div>
          </Col>
        </Row>

        <Row className='my-2 row-gap-2'>
          <Col xs={12} sm={"auto"} md={12} lg={"auto"}>
            <Button variant='primary' className='rounded-pill w-100'>
              Disponibile per
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button variant='outline-primary' className='rounded-pill'>
              Aggiungi sezione del profilo
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button variant='outline-light' className='rounded-pill'>
              Altro
            </Button>
          </Col>
        </Row>
        <Container className='bg-secondary rounded mt-3'>
          <Row>
            <Col xs={10}>
              <Row className='py-2'>
                <Col xs={12}>Disponibile a lavorare</Col>
                <Col xs={12}>Ruoli di Programmatore di videogiochi, ...</Col>
                <Col xs={12}>Mostra Dettagli</Col>
              </Row>
            </Col>
            <Col xs={2} className='text-end'>
              <i className='bi bi-pencil' />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default HeroSectionProfilePage
