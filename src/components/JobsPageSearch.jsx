import { Container, ListGroup, Button } from "react-bootstrap";
import logo from "../assets/logo.jpg";

function JobsPageSearch({ jobs, searchInputValue, myProfile }) {
  return (
    <div id="jobsMain" className="bg-dark text-light rounded mb-3">
      <Container className="p-3 pb-0">
        <h4>
          {searchInputValue
            ? searchInputValue.charAt(0).toUpperCase() + searchInputValue.slice(1).toLowerCase()
            : "Ricerca Lavori"}
        </h4>
        <p className="text-secondary">I risultati della tua ricerca</p>
        <ListGroup className="list-group-flush">
          {jobs.length > 0 &&
            jobs.slice(0, 10).map((job) => (
              <ListGroup.Item className="bg-dark text-light border-secondary py-3" key={job._id}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <div>
                      <img src={logo} alt="profile picture" />
                    </div>
                    <div>
                      <a href="#350">
                        <h5>{job.title}</h5>
                      </a>
                      <p>{job.company_name}</p>
                      <p className="text-secondary">{job.candidate_required_location}</p>
                      <div className="d-flex gap-2 align-items-center mt-2">
                        <img
                          className="rounded-circle miniPicture"
                          src={myProfile && myProfile.image}
                          alt="profile picture"
                        />
                        <h6 className="text-secondary">Il tuo profilo è in linea con questa offerta di lavoro</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button className="xBtn">
                      <i className="bi bi-x-lg"></i>
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Container>
      <Button className="showBtn">
        Mostra tutto <i className="bi bi-arrow-right"></i>
      </Button>
    </div>
  );
}

export default JobsPageSearch;
