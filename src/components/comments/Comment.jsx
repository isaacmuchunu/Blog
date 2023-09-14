import React from "react";

import { images } from "../../constants";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  loggedInUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
}) => {
  const isUserLoggedIn = Boolean(loggedInUserId);
  const commentBelongsToUser = loggedInUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parent ? parent : comment._id;
  const replyOnUserId = comment.user._id
  return (
    <div className="flex flex-nowrap gap-x-3 items-start rounded-lg bg-[#f2f4f5] p-3">
      <img
        src={images.post1profile}
        alt="profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <p className="font-poppins mt-[10px] text-dark-light">{comment.desc}</p>
        <div className="flex items-center gap-x-3 text-dark-light font-poppins text-sm mt-3 mb-3">
          {isUserLoggedIn && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="h-auto w-4" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button className="flex items-center space-x-2">
                <FiEdit2 className="h-auto w-4" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-2">
                <FiTrash className="h-auto w-4" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
            formCancelHandler={()=>setAffectedComment(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;