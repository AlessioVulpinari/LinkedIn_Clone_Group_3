function JobsPageAside() {
  return (
    <div id="jobsAside" className="bg-dark text-light rounded d-flex flex-column">
      <div className="d-flex">
        <i className="bi bi-bookmark-fill"></i>
        <a href="#a">Le mie offerte di lavoro</a>
      </div>
      <div className="d-flex">
        <i className="bi bi-list-ul"></i>
        <a href="#a">Preferenze</a>
      </div>
      <div className="d-flex">
        <i className="bi bi-clipboard2-check"></i>
        <a href="#a">Valutazioni delle competenze</a>
      </div>
      <div className="d-flex">
        <i className="bi bi-play-btn-fill"></i>
        <a href="#a">indicazioni per chi cerca lavoro</a>
      </div>
    </div>
  );
}

export default JobsPageAside;
