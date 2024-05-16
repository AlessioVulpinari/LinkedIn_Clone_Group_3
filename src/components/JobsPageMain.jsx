import { useEffect } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobsAction } from "../redux/actions";
import logo from "../assets/logo.jpg";

function JobsPageMain() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(getAllJobsAction());
  }, []);

  return (
    <div id="jobsMain" className="bg-dark text-light rounded">
      <Container className="p-3 pb-0">
        <h4>Le principali offerte di lavoro per te</h4>
        <p className="text-secondary">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        <ListGroup className="list-group-flush">
          {jobs.data &&
            jobs.data.slice(0, 3).map((job) => (
              <ListGroup.Item className="bg-dark text-light border-secondary py-3" key={job._id}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <div>
                      <img src={logo} alt="profile picture" />
                    </div>
                    <div>
                      <a href="#104">
                        <h5>{job.title}</h5>
                      </a>
                      <p>{job.company_name}</p>
                      <p className="text-secondary">{job.candidate_required_location}</p>
                      <div className="d-flex gap-2 align-items-center mt-2">
                        <img
                          className="rounded-circle miniPicture"
                          src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
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

export default JobsPageMain;
