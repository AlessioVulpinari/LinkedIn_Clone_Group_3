import { Col, Container, Row } from "react-bootstrap"
import NewsSidebar from "./SideBarHomeNotice"
import HomeFooter from "./HomeFooter"
import HomePost from "./HomePostContainer"
import HomeAsideSx from "./HomeAsideSx"
import AddPostSection from "./AddPostSection"
import AddPostModal from "./AddPostModal"

const Home = () => {
  return (
    <>
      <Container style={{ marginTop: 90 }} fluid='xl'>
        <Row className='mb-3 justify-content-end'>
          <Col xs={12} md={4} lg={3}>
            <HomeAsideSx />
          </Col>
          <Col xs={12} md={6} lg={5} xl={6}>
            <AddPostSection />
            <HomePost />
          </Col>
          <Col xs={12} md={8} lg={4} xl={3}>
            <NewsSidebar />
            <HomeFooter />
          </Col>
        </Row>
      </Container>
      <AddPostModal />
    </>
  )
}

export default Home
