import { Col, Container, Row } from "react-bootstrap"
import { formatDate } from "../redux/actions"

const SingleExperience = ({ experience }) => {
  return (
    <Container className='my-2'>
      <Row className='border-bottom border-secondary'>
        <Col xs={2} xl={1}>
          <img
            src='https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg'
            alt='Epicode Logo'
            width={48}
            height={48}
            className='me-1'
          />
        </Col>

        <Col xs={10} xl={11}>
          <Row>
            <Col xs={12}>
              <h6>{experience.role}</h6>
            </Col>
            <Col xs={12}>
              <p className='my-0'>{experience.company}</p>
            </Col>
            <Col xs={12} className='text-secondary'>
              <p className='my-0'>
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </p>
            </Col>
            <Col xs={12} className='text-secondary '>
              <p>{experience.area}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>{experience.description}</p>
            </Col>
            <Col xs={12}>
              <p>
                <i className='bi bi-gem' /> {experience.role}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleExperience
