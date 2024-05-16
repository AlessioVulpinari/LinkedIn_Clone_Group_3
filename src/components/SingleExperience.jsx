import { Col, Container, Row } from "react-bootstrap"
import { SET_EXPERIENCE_ID, SET_EXPERIENCE_MODAL_ON, SET_FORM_EXPERIENCE_MODAL, formatDate } from "../redux/actions"
import { useDispatch } from "react-redux"

const SingleExperience = ({ experience }) => {
  const dispatch = useDispatch()

  const handleModifyFormBtn = () => {
    dispatch({
      type: SET_FORM_EXPERIENCE_MODAL,
      payload: {
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate,
        description: experience.description,
        area: experience.area,
        Image: experience.image,
      },
    })
    dispatch({ type: SET_EXPERIENCE_ID, payload: experience._id })
    dispatch({ type: SET_EXPERIENCE_MODAL_ON })
  }

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
              <div className='d-flex justify-content-between'>
                <h6>{experience.role}</h6>
                <div
                  className='rounded-circle d-flex justify-content-center align-items-center iconHover'
                  style={{ width: 28, height: 28 }}
                  onClick={handleModifyFormBtn}
                >
                  <i className='bi bi-pencil' style={{ fontSize: 16 }} />
                </div>
              </div>
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
