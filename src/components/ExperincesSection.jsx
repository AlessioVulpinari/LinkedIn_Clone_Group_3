import { Container } from "react-bootstrap"
import SingleExperience from "./SingleExperience"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProfileExperiences } from "../redux/actions"

const ExperincesSection = () => {
  const myExperiences = useSelector((state) => state.experinces.content)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileExperiences())
  }, [])

  return (
    <Container className='text-bg-dark rounded py-2'>
      <div className='d-flex justify-content-between align-items-center pt-2'>
        <h3>Esperienze</h3>
        <div>
          <i className='bi bi-plus-lg me-3' style={{ fontSize: 24 }} />
          <i className='bi bi-pencil' style={{ fontSize: 24 }} />
        </div>
      </div>

      {myExperiences && myExperiences.map((experience) => <SingleExperience key={experience._id} experience={experience} />)}
    </Container>
  )
}

export default ExperincesSection
