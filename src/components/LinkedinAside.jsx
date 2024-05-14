import { useEffect, useState } from "react"
import { Button, ListGroup, Container } from "react-bootstrap"
import { useSelector } from "react-redux"

function LinkedinAside() {
  const [user, setUser] = useState()
  const myProfile = useSelector((state) => state.profile.content)

  const userFetch = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzFiNjE2N2U1MzAwMTVmYTY5NzkiLCJpYXQiOjE3MTU1ODU0NzEsImV4cCI6MTcxNjc5NTA3MX0.uxBPh5sUmkXVY-HezN5u6IYFJdQvE07vpfXFiaJHnlw",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then((data) => {
        const randomUsers = data.sort(() => Math.random() - 0.5).slice(0, 5)
        setUser(randomUsers)
      })
      .catch((errore) => {
        console.log("Errore nella fetch delle persone", errore)
      })
  }

  useEffect(() => {
    userFetch()
  }, [])

  return (
    <div id='aside'>
      <div className='bg-dark text-light rounded mb-3 mt-2'>
        <Container className='p-3 pb-0'>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item className='bg-dark text-light border-secondary py-3'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5>Lingua del profilo</h5>
                  <p>Italiano</p>
                </div>
                <div>
                  <Button className='editBtn'>
                    <i className='bi bi-pencil'></i>
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark text-light border-secondary py-3'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5>Profilo pubblico e URL</h5>
                  <p>
                    www.linkedin.com/in/{myProfile && myProfile.name}-{myProfile && myProfile.surname}-
                    {myProfile && myProfile._id}
                  </p>
                </div>
                <div>
                  <Button className='editBtn'>
                    <i className='bi bi-pencil'></i>
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
      <div className='bg-dark text-light rounded my-3'>
        <Container className='p-3 pb-0'>
          <h5>Persone che potresti conoscere</h5>
          <p>Dalla tua scuola o università</p>
          <ListGroup className='list-group-flush'>
            {user &&
              user.map((randomUsers) => {
                return (
                  <ListGroup.Item className='bg-dark text-light border-secondary py-3' key={randomUsers._id}>
                    <div className='d-flex gap-2'>
                      <div>
                        <img className='rounded-circle' src={randomUsers.image} alt='profile picture' />
                      </div>
                      <div>
                        <a href='#115'>
                          {randomUsers.name} {randomUsers.surname}
                        </a>
                        <p>{randomUsers.title}</p>
                        <Button className='addBtn'>
                          <i className='bi bi-person-plus-fill'></i> Collegati
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                )
              })}

            {/* <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item> */}
          </ListGroup>
        </Container>
        <Button className='showBtn'>Mostra tutto</Button>
      </div>
      <div className='bg-dark text-light rounded my-3'>
        <Container className='p-3 pb-0'>
          <h5>Potrebbe interessarti</h5>
          <p>Pagine per te</p>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item className='bg-dark text-light border-secondary py-3'>
              <div className='d-flex gap-2'>
                <div>
                  <img
                    src='https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg'
                    alt='profile picture'
                  />
                </div>
                <div>
                  <a href='#'>Nome Azienda</a>
                  <p>numero follower</p>
                  <Button className='addBtn'>
                    <i className='bi bi-plus-lg'></i> Segui
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark text-light border-secondary py-3'>
              <div className='d-flex gap-2'>
                <div>
                  <img
                    src='https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg'
                    alt='profile picture'
                  />
                </div>
                <div>
                  <a href='#'>Nome Azienda</a>
                  <p>numero follower</p>
                  <Button className='addBtn'>
                    <i className='bi bi-plus-lg'></i> Segui
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <Button className='showBtn'>Mostra tutto</Button>
      </div>
    </div>
  )
}

export default LinkedinAside
