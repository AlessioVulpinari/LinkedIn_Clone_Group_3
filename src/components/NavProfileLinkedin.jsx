import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"
import { useSelector } from "react-redux"

const NavProfileCard = () => {
  const myProfile = useSelector((state) => state.profile.content)

  return (
    <NavDropdown
      className='d-flex justify-content-center align-items-center border-end'
      align={{ sm: "end" }}
      title={
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img
            width='24'
            src={myProfile && myProfile.image}
            height='24'
            alt='user'
            className='rounded-circle dropdown-toggle objectfit-cover'
            role='button'
          />

          <div className='dropdown-toggle d-none d-md-block'>Tu</div>
        </div>
      }
      id='collapsible-nav-dropdown'
      data-bs-theme='dark'
    >
      <div className='px-2 nav-card-profile'>
        <div className='d-flex flex-column pb-2 border-bottom'>
          <div className='d-flex align-items-center mb-2 pointer'>
            <img
              src={myProfile && myProfile.image}
              alt='id'
              width='60px'
              height='60px'
              className='me-2 rounded-circle objectfit-cover'
            />
            <div className='d-flex flex-column'>
              <p className='m-0 fs-5 fw-semibold'>{myProfile ? myProfile.name + " " + myProfile.surname : "Nessun dato"}</p>
              <p className='m-0'>{myProfile ? myProfile.Title : "Nessun dato"}</p>
            </div>
          </div>

          <Button variant='outline-primary' className='rounded-5 py-0 fw-semibold'>
            Visualizza profilo
          </Button>
        </div>

        <div className='px-1 pb-2 border-bottom'>
          <p className='mb-1 mt-2 fw-semibold'>Account</p>
          <p className='mb-1 ps-1  fw-semibold'>
            <i className='bi bi-square-fill'></i>
            <a href='#11' className='text-secondary nav-profile-premium ms-2'>
              Prova Premium per 0 EUR
            </a>
          </p>
          <p className='mb-1 ps-1'>
            <a href='#2' className='text-secondary nav-profile-link'>
              Impostazioni e privacy
            </a>
          </p>
          <p className='mb-1 ps-1'>
            <a href='#3' className='text-secondary nav-profile-link'>
              Guida
            </a>
          </p>
          <p className='mb-1 ps-1'>
            <a href='#4' className='text-secondary nav-profile-link'>
              Lingua
            </a>
          </p>
        </div>
        <div className='px-1 pb-2 border-bottom'>
          <p className='mb-1 mt-2 fw-semibold'>Gestisci</p>
          <p className='mb-1 ps-1'>
            <a href='#5' className='text-secondary nav-profile-link'>
              Post e attività
            </a>
          </p>
          <p className='mb-1 ps-1'>
            <a href='#6' className='text-secondary nav-profile-link'>
              Account per la pubblicazione di off
            </a>
            <span className='text-secondary'>...</span>
          </p>
        </div>
        <p className='mb-0 mt-1 ps-2'>
          <a href='#7' className='text-secondary nav-profile-link'>
            Esci
          </a>
        </p>
      </div>
    </NavDropdown>
  )
}

export default NavProfileCard
