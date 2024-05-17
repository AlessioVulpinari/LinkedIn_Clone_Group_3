import { Button, ListGroup, Card } from "react-bootstrap"
import { useSelector } from "react-redux"

function HomeAsideSx() {
  const myProfile = useSelector((state) => state.profile.content)

  return (
    <div id='asideSx'>
      <Card className='bg-dark text-light rounded'>
        <div className='position-relative'>
          <Card.Img
            variant='top'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBSetR7qpei5_qAWAdynAQxq_aYTpzLywSBTVc4MgTg&s'
            className='img-fluid'
          />
          <div className='rounded-circle miniProfile'>
            <img className='miniPic' src={myProfile && myProfile.image} />
          </div>
        </div>
        <ListGroup variant='flush'>
          <ListGroup.Item className='bg-dark text-light border-secondary p-4 mt-5 text-center'>
            <h4>
              <a className='toProfilePage' href='#s'>
                {myProfile && myProfile.name + " " + myProfile.surname}
              </a>
            </h4>
            <p className='lightFont'>{myProfile && myProfile.title}</p>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light border-secondary px-0'>
            <Button className='cardBtn textAlign'>
              <div className='d-flex justify-content-between'>
                <p className='lightFont'>Collegamenti</p>
                <p className='lightblue'>NC</p>
              </div>
              <p>Espandi la tua rete</p>
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light border-secondary p-0'>
            <Button className='cardBtn textAlign'>
              <p className='lightFont'>Accedi a strumenti e informazioni in esclusiva</p>
              <i className='bi bi-square-fill'></i> Prova Premium per 0 EUR
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light border-secondary p-0'>
            <Button className='cardBtn textAlign'>
              <i className='bi bi-bookmark-fill'></i> Elementi salvati
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className='bg-dark text-light rounded mt-2'>
        <ListGroup variant='flush'>
          <ListGroup.Item className='bg-dark text-light border-secondary p-2'>
            <a className='asideLink' href='#a'>
              Gruppi
            </a>
            <div className='d-flex justify-content-between'>
              <a className='asideLink' href='#b'>
                Eventi
              </a>
              <Button className='rounded-circle' id='addBtn'>
                <i className='bi bi-plus-lg'></i>
              </Button>
            </div>
            <a className='asideLink' href='#c'>
              Hashtag seguiti
            </a>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-light border-secondary p-0'>
            <Button className='cardBtn'>Scopri di più</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default HomeAsideSx
