import { Col, Container, Row } from "react-bootstrap"
import LinkedinAside from "../LinkedinAside"
import LinkedinFooter from "../LinkedinFooter"
import HeroSectionUserPage from "./HeroSectionUserPage"
import ExperincesUserSection from "./ExperincesSection"

const UserProfilePage = () => {
  return (
    <>
      <Container style={{ marginTop: 90 }}>
        <Row>
          <Col xs={12} md={7} lg={8}>
            <HeroSectionUserPage />
            <ExperincesUserSection />
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

export default UserProfilePage
