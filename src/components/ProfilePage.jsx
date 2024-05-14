import ExperincesSection from "./ExperincesSection"
import HeroSectionProfilePage from "./HeroSectionProfilePage"
import { Col, Container, Row } from "react-bootstrap"
import LinkedinAside from "./LinkedinAside"
import LinkedinFooter from "./LinkedinFooter"

const ProfilePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <HeroSectionProfilePage />
            <ExperincesSection />
          </Col>
          <Col xs={12} md={4}>
            <LinkedinAside />
          </Col>
        </Row>
      </Container>
      <LinkedinFooter />
    </>
  )
}
export default ProfilePage
