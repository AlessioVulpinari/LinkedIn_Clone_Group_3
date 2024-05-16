import { Col, Container, Row } from "react-bootstrap";
import JobsPageAside from "./JobsPageAside";
import JobsPageMain from "./JobsPageMain";
import JobsPageSearch from "./JobsPageSearch";
import HomeFooter from "./HomeFooter";

const JobsPage = () => {
  return (
    <Container style={{ marginTop: 90 }} fluid="xl">
      <Row className="mb-3 justify-content-end">
        <Col xs={12} md={4} lg={3}>
          <JobsPageAside />
        </Col>
        <Col xs={12} md={6} lg={5} xl={6}>
          <JobsPageSearch />
          <JobsPageMain />
        </Col>
        <Col xs={12} md={8} lg={4} xl={3}>
          <HomeFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default JobsPage;
