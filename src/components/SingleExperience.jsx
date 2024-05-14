import { Col, Container, Row } from "react-bootstrap"

const SingleExperience = () => {
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
              <h6>Centralinista</h6>
            </Col>
            <Col xs={12}>
              <p className='my-0'>Sol et salus S.P.A. - A tempo pieno</p>
            </Col>
            <Col xs={12} className='text-secondary'>
              <p className='my-0'>giu 2021 - nov 2021 - 6 mesi</p>
            </Col>
            <Col xs={12} className='text-secondary '>
              <p>Rimini, Emilia Romagna, Italia - In sede</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non id est libero inventore blanditiis possimus
                laudantium amet nulla delectus odit repudiandae, rem reprehenderit accusantium, corrupti iure distinctio! Vel,
                repellat. Temporibus maiores aut hic! Ut commodi alias ea quasi sit et eos cum molestiae sequi iste laborum porro
                assumenda, fugit quo facere. Recusandae saepe fugiat provident cumque aliquam, maiores laboriosam. Corporis libero
                ipsam excepturi perferendis, minima, quidem sequi sint, impedit ut odit fuga modi optio placeat asperiores porro
                eveniet architecto fugit iusto fugiat aut. Officiis accusantium tempore nulla similique provident.
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className='bi bi-gem' /> Ricezione Telefonica e Relazione con i clienti
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleExperience
