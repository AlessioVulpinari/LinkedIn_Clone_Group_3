import { Container } from "react-bootstrap"
import SingleExperience from "../SingleExperience"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProfileExperiences } from "../../redux/actions"
import { useParams } from "react-router-dom"

const ExperincesUserSection = () => {
  const userExperiences = useSelector((state) => state.userExperinces.content)
  // const userProfile = useSelector((state) => state.user.content)
  const { userId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileExperiences(userId))
  }, [])

  return (
    <Container id='expSection' className='text-bg-dark rounded py-2'>
      <div className='d-flex justify-content-between align-items-center pt-2'>
        <h4>Esperienza</h4>
      </div>

      {userExperiences && userExperiences.map((experience) => <SingleExperience key={experience._id} experience={experience} />)}
    </Container>
  )
}

export default ExperincesUserSection
