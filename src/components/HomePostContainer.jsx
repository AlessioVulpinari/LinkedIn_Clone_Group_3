import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPostsAction } from "../redux/actions";
import AddCommentSection from "./CommentsContainer";
import SingleComment from "./SingleComment";

const HomePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const profile = useSelector((state) => state.profile.content);
  const [comments, setComments] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjQwNTdmMzA0NjAwMWFlNTlmOTAiLCJpYXQiOjE3MTU5NDM4MzIsImV4cCI6MTcxNzE1MzQzMn0.lTbhQD4udc6x45vrgMmlzwik9ZMVDhOFtaDhCrVq0L0";

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const hour = date.slice(date.indexOf("T") + 1, date.indexOf("T") + 6);
    return `${day}/${month}/${year} alle ${hour}`;
  };

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addComment = async (newComment) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newComment),
      });
      const data = await response.json();
      setComments([...comments, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(getAllPostsAction());
    fetchComments();
  }, []);

  return posts
    .reverse()
    .slice(0, 10)
    .map((post) => (
      <Card className="mb-2 bg-dark text-light" key={post._id}>
        <Card.Body className="px-0 pt-2 pb-1">
          <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center mb-2 px-3">
              <img
                src={post.user.image}
                alt={post.user._id}
                height="48px"
                width="48px"
                className="rounded-circle objectfit-cover me-2 pointer"
              />
              <div>
                <div className="d-flex justify-content-between">
                  <a
                    href="#99"
                    className="text-white nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover fs-7"
                  >
                    {post.user.name} {post.user.surname} {"(" + post.user.username + ")" || ""}
                  </a>
                </div>

                <p className="m-0 fs-8 text-secondary pointer">
                  {post.user.title} - {post.user.area}
                </p>
                <p className="m-0 fs-8 text-secondary pointer">
                  Pubblicato il: {formatDate(post.createdAt)} <i className="bi bi-dot"></i>{" "}
                  <i className="fa-solid fa-earth-europe"></i>
                </p>
              </div>
            </div>
            {post.user._id === profile._id && (
              <Button className="deleteBtn mx-2">
                <i className="bi bi-trash" onClick={() => dispatch(deletePost(post._id))} />{" "}
              </Button>
            )}
          </div>

          <div className="px-3">
            <p className="fs-7">{post.text}</p>
          </div>
          {post.image && <img src={post.image} alt={post._id} className="w-100 pointer" />}
          <div id="postBtns" className="px-3 fs-8">
            <div className="d-flex justify-content-between mt-3">
              <div>
                <Button className="addContentBtn">
                  <i className="bi bi-hand-thumbs-up"></i> Consiglia
                </Button>
              </div>
              <div>
                <Button className="addContentBtn">
                  <i className="bi bi-chat-text"></i> Commenta
                </Button>
              </div>
              <div>
                <Button className="addContentBtn">
                  <i className="bi bi-arrow-90deg-right"></i> Diffondi il post
                </Button>
              </div>
              <div>
                <Button className="addContentBtn">
                  <i className="bi bi-send-fill"></i> Invia
                </Button>
              </div>
            </div>
          </div>
          <AddCommentSection postId={post._id} addComment={addComment} />
          {comments
            .filter((comment) => comment.elementId === post._id)
            .map((comment) => (
              <SingleComment key={comment._id} comment={comment} deleteComment={deleteComment} />
            ))}
        </Card.Body>
      </Card>
    ));
};

export default HomePost;
