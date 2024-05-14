import { Container } from "react-bootstrap"
import SingleExperience from "./SingleExperience"

const ExperincesSection = () => {
  return (
    <Container className='text-bg-dark rounded py-2'>
      <div className='d-flex justify-content-between align-items-center pt-2'>
        <h3>Esperienze</h3>
        <div>
          <i className='bi bi-plus-lg me-3' style={{ fontSize: 24 }} />
          <i className='bi bi-pencil' style={{ fontSize: 24 }} />
        </div>
      </div>
      <SingleExperience />
      <SingleExperience />
    </Container>
  )
}

export default ExperincesSection
