import { Button } from "react-bootstrap";

function JobsPageAside() {
  return (
    <div id="jobsAside">
      <div className="bg-dark text-light rounded p-3 mb-3 d-flex flex-column">
        <div className="d-flex gap-3 align-items-center my-2">
          <i className="bi bi-bookmark-fill"></i>
          <a href="#a">Le mie offerte di lavoro</a>
        </div>
        <div className="d-flex gap-3 align-items-center my-2">
          <i className="bi bi-list-ul"></i>
          <a href="#a">Preferenze</a>
        </div>
        <div className="d-flex gap-3 align-items-center my-2">
          <i className="bi bi-clipboard2-check"></i>
          <a href="#a">Valutazioni delle competenze</a>
        </div>
        <div className="d-flex gap-3 align-items-center my-2">
          <i className="bi bi-play-btn-fill"></i>
          <a href="#a">indicazioni per chi cerca lavoro</a>
        </div>
      </div>
      <Button className="asideBtn">
        <div className="d-flex align-items-center gap-4">
          <i className="bi bi-pencil-square"></i>
          Pubblica offerta gratuita
        </div>
      </Button>
    </div>
  );
}

export default JobsPageAside;
