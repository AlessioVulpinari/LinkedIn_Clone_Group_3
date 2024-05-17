import { Col, Container, Row } from "react-bootstrap";
import JobsPageAside from "./JobsPageAside";
import JobsPageMain from "./JobsPageMain";
import JobsPageSearch from "./JobsPageSearch";
import HomeFooter from "./HomeFooter";
import { useLocation } from "react-router-dom";

const JobsPage = () => {
  const location = useLocation();
  const jobs = location.state?.jobs || [];
  const searchInputValue = location.state?.searchInputValue || "";
  const myProfile = location.state?.myProfile || [];

  return (
    <Container style={{ marginTop: 90 }} fluid="xl">
      <Row className="mb-3 justify-content-end">
        <Col xs={12} md={4} lg={3}>
          <JobsPageAside />
        </Col>
        <Col xs={12} md={6} lg={5} xl={6}>
          <JobsPageSearch jobs={jobs} searchInputValue={searchInputValue} myProfile={myProfile} />
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
