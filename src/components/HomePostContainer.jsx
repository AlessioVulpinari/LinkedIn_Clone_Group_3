import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPostsAction } from "../redux/actions";
import AddCommentSection from "./CommentsContainer";
import SingleComment from "./SingleComment";

const HomePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const profile = useSelector((state) => state.profile.content);

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const hour = date.slice(date.indexOf("T") + 1, date.indexOf("T") + 6);
    return `${day}/${month}/${year} alle ${hour}`;
  };

  useEffect(() => {
    dispatch(getAllPostsAction());
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
          <AddCommentSection />
          <SingleComment />
        </Card.Body>
      </Card>
    ));
};

export default HomePost;
