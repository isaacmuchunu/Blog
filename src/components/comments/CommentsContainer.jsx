import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ className, loggedInUserId }) => {
  const [comments, setComments] = useState([]);
  const [affectedComment, setAffectedComment] = useState(null);
  const mainComments = comments.filter((comment) => comment.parent === null);

  useEffect(() => {
    (async () => {
      try {
        const commentData = await getCommentsData();
        setComments(commentData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setComments((currState) => {
      return [newComment, ...currState];
    });
    setAffectedComment(null);
  };
  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value };
      }
      return comment;
    });
    setComments(updatedComments);
    setAffectedComment(null);
  };
  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComments(updatedComments);
  };
  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            loggedInUserId={loggedInUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
