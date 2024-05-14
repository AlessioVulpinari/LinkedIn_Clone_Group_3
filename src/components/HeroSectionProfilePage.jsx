import { useEffect } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getMyProfile } from "../redux/actions"

const HeroSectionProfilePage = () => {
  const dispatch = useDispatch()
  const myProfile = useSelector((state) => state.profile.content)

  useEffect(() => {
    dispatch(getMyProfile())
  }, [])
  return (
    <Card className='text-bg-dark rounded my-2'>
      <div className='position-relative'>
        <Card.Img
          variant='top'
          src='https://images.unsplash.com/photo-1715464502545-090ee1dc122f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='img-fluid'
        />
        <div className='rounded-circle profileContainer'>
          <img className='profilePick' src={myProfile && myProfile.image} />
        </div>
      </div>

      <Card.Body className='topMargin'>
        <Row>
          <Col xl={7} lg={6} md={12} sm={6} xs={12}>
            <Card.Title>{myProfile ? myProfile.name + " " + myProfile.surname : "Nessun dato"}</Card.Title>
            <Card.Subtitle>{myProfile ? myProfile.Title : "Nessun dato"}</Card.Subtitle>
            <Card.Text className='mb-2'>EPICODE</Card.Text>
            <Card.Text>
              {myProfile ? myProfile.area : "Nessun dato"} <span> Informazioni di Contatto </span>
            </Card.Text>
            <Card.Text>33 follower - 32 collegamenti </Card.Text>
          </Col>
          <Col xl={5} lg={6} md={0} sm={6} xs={0} className='d-none d-sm-block d-md-none d-lg-block'>
            <div className='d-flex'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg'
                alt='Epicode Logo'
                width={32}
                height={32}
                className='me-2'
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
