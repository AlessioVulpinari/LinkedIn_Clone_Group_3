import { useEffect } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getUserProfile } from "../../redux/actions"
import { useParams } from "react-router-dom"

const HeroSectionUserPage = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const userProfile = useSelector((state) => state.user.content)

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [dispatch, userId])

  return (
    <Card id='heroProfile' className='text-bg-dark rounded my-2'>
      <div className='position-relative'>
        <Card.Img
          variant='top'
          src='https://images.unsplash.com/photo-1715464502545-090ee1dc122f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='img-fluid'
          style={{ height: "300px" }}
        />
        <div className='rounded-circle profileContainer'>
          <img className='profilePick' src={userProfile && userProfile.image} />
        </div>
      </div>

      <Card.Body className='topMargin userTopMargin'>
        <Row>
          <Col xl={7} lg={6} md={12} sm={6} xs={12}>
            <Card.Title className='profileName'>
              {userProfile ? userProfile.name + " " + userProfile.surname : "Nessun dato"}
            </Card.Title>
            <Card.Subtitle>{userProfile ? userProfile.title : "Nessun dato"}</Card.Subtitle>
            <Card.Text className='location'>
              {userProfile ? userProfile.area : "Nessun dato"}{" "}
              <span>
                {" "}
                ·<a href='#'> Informazioni di Contatto</a>
              </span>
            </Card.Text>
            <Card.Text className='location'>
              <a href='#'>33 followers</a> · <a href='#'>32 collegamenti</a>
            </Card.Text>
          </Col>
          <Col xl={5} lg={6} md={0} sm={6} xs={0} className='d-none d-sm-block d-md-none d-lg-block'>
            <div className='d-flex align-items-center'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg'
                alt='Epicode Logo'
                width={32}
                height={32}
                className='me-2'
              />
              <a className='companyName' href='#'>
                EPICODE
              </a>
            </div>
          </Col>
        </Row>

        <Row className='my-2 row-gap-2'>
          <Col xs={12} sm={"auto"} md={12} lg={"auto"}>
            <Button className='rounded-pill w-100 dispBtn'>Disponibile per</Button>
          </Col>
          <Col xs={"auto"}>
            <Button className='rounded-pill addSectionBtn'>Aggiungi sezione del profilo</Button>
          </Col>
          <Col xs={"auto"}>
            <Button className='rounded-pill altroBtn'>Altro</Button>
          </Col>
        </Row>
        <Container className='rounded mt-3 bgCustom'>
          <Row>
            <Col xs={10}>
              <Row className='py-2'>
                <Col xs={12}>Disponibile a lavorare</Col>
                <Col xs={12}>Ruoli di Programmatore di videogiochi, ...</Col>
                <Col xs={12}>
                  <a href='#'>Mostra Dettagli</a>
                </Col>
              </Row>
            </Col>
            <Col xs={2} className='text-end'>
              <Button className='modBtn'>
                <i className='bi bi-pencil' />
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default HeroSectionUserPage
