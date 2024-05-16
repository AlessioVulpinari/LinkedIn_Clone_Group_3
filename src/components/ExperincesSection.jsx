import { Container, Button } from "react-bootstrap";
import SingleExperience from "./SingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_EXPERIENCE_MODAL_ON, getProfileExperiences } from "../redux/actions";

const ExperincesSection = () => {
  const myExperiences = useSelector((state) => state.experinces.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileExperiences());
  }, []);

  return (
    <Container id="expSection" className="text-bg-dark rounded py-2">
      <div className="d-flex justify-content-between align-items-center pt-2">
        <h4>Esperienza</h4>
        <Button className="addBtn">
          <i
            className="bi bi-plus-lg"
            style={{ fontSize: 24 }}
            onClick={() => dispatch({ type: SET_EXPERIENCE_MODAL_ON })}
          />
        </Button>
      </div>

      {myExperiences &&
        myExperiences.map((experience) => <SingleExperience key={experience._id} experience={experience} />)}
    </Container>
  );
};

export default ExperincesSection;
