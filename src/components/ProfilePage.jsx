import HeroSectionProfilePage from "./HeroSectionProfilePage"
import { Col, Container, Row } from "react-bootstrap"

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <HeroSectionProfilePage />
        </Col>
      </Row>
    </Container>
  )
}
export default ProfilePage
