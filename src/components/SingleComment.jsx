import { Button, Container } from "react-bootstrap";

function SingleComment({ comment, deleteComment }) {
  return (
    <>
      <Container>
        <div className="d-flex gap-1 align-items-start">
          <img
            className="rounded-circle commentPic"
            src="https://www.asiagofood.it/wp-content/uploads/2022/09/funghi-porcini-si-possono-coltivare-copertina-750x600-1.jpg"
            alt="profile image"
          />
          <div>
            <div className="comment rounded p-2 mb-1">
              <div className="d-flex justify-content-between">
                <a href="#784">{comment.author}</a>
              </div>
              <p className="text-secondary">Full Stack Web Developer</p>
              <p className="mt-1">{comment.comment}</p>
            </div>
            <Button className="commentBtn">Consiglia</Button>
            <Button className="commentBtn">Rispondi</Button>
            <Button className="commentBtn" onClick={() => deleteComment(comment._id)}>
              Elimina
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleComment;
