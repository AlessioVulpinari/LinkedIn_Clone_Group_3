import { useState } from "react";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function AddCommentSection({ postId, addComment }) {
  const myProfile = useSelector((state) => state.profile.content);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        comment: commentText,
        rate: "5",
        elementId: postId,
      };
      addComment(newComment);
      setCommentText("");
    }
  };

  return (
    <Container className="rounded bg-dark p-3 d-flex flex-column mb-3">
      <Form onSubmit={handleAddComment}>
        <div className="d-flex gap-1 align-items-center">
          <div>
            <img className="rounded-circle commentPic" src={myProfile && myProfile.image} alt="profile" />
          </div>
          <div className="w-100 d-flex gap-1 align-items-center justify-content-between">
            <InputGroup className="custom-input-group">
              <Form.Control
                className="addComment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                type="text"
                placeholder="Aggiungi un commento..."
              />
              <Button className="commentBtns">
                <i className="bi bi-emoji-dizzy"></i>
              </Button>
              <Button type="button" className="commentBtns">
                <i className="bi bi-card-image"></i>
              </Button>
            </InputGroup>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default AddCommentSection;
