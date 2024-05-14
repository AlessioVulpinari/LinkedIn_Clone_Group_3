import ExperincesSection from "./ExperincesSection"
import HeroSectionProfilePage from "./HeroSectionProfilePage"
import { Col, Container, Row } from "react-bootstrap"
import LinkedinAside from "./LinkedinAside"
import LinkedinFooter from "./LinkedinFooter"
import LinkedInNavBar from "./LinkedinNavBar"

const ProfilePage = () => {
  return (
    <>
      <LinkedInNavBar />
      <Container style={{ marginTop: 62 }}>
        <Row>
          <Col xs={12} md={7} lg={8}>
            <HeroSectionProfilePage />
            <ExperincesSection />
          </Col>
          <Col xs={12} md={5} lg={4}>
            <LinkedinAside />
          </Col>
        </Row>
      </Container>
      <LinkedinFooter />
    </>
  )
}
export default ProfilePage
