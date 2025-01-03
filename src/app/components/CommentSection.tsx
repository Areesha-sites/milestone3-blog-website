"use client";
import React, { useState, useEffect } from "react";
import { IoMdTrash } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
const CommentSection = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [replyId, setReplyId] = useState(null);
  const [replyText, setReplyText] = useState("");
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  const handlePostComments = (e) => {
    e.preventDefault();
    if (name.trim() === "" || newComment.trim() === "") return;
    const comment = {
      id: Date.now(),
      text: newComment,
      name,
      date: new Date().toLocaleString(),
      likes: 0,
      liked: false,
      replies: [],
    };

    setComments([comment, ...comments]);
    setName("");
    setNewComment("");
  };
  const handleEditComment = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    setEditId(id);
    setEditText(commentToEdit.text);
  };
  const handleUpdateComment = () => {
    const updatedComments = comments.map((comment) =>
      comment.id === editId ? { ...comment, text: editText } : comment
    );
    setComments(updatedComments);
    setEditId(null);
    setEditText("");
  };
  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };
  const handleLikeComment = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            likes: comment.likes + (comment.liked ? -1 : 1),
            liked: !comment.liked,
          }
        : comment
    );
    setComments(updatedComments);
  };
  const handleReply = (id) => {
    setReplyId(id);
  };
  const handlePostReply = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                text: replyText,
                name,
                date: new Date().toLocaleString(),
              },
            ],
          }
        : comment
    );
    setComments(updatedComments);
    setReplyId(null);
    setReplyText("");
  };
  return (
    <section className="bg-slate-100 dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="px-4 relative sm:left-[59px] md:left-0 lg:left-[-150px] xl:left-0">
        <h2 className="text-lg lg:text-2xl uppercase font-bold text-black/70 dark:text-white">
          Discussion ({comments.length})
        </h2>
        <div className="py-4 flex flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className=" px-4 py-2 mb-2 sm:w-[500px] lg:w-[600px] w-[300px] outline-none border-none bg-white text-[14px] rounded-[3px]"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="sm:w-[500px] px-4 py-4 outline-none lg:w-[600px] w-[300px] border-none bg-white text-[14px] rounded-[3px]"
            style={{ height: "150px" }}
          />
          <button
            onClick={handlePostComments}
            className="mt-2 px-4 py-2 w-[160px] text-white text-[14px] bg-hoverTextColor hover:bg-iconColor rounded-[3px]"
          >
            Post Comment
          </button>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-white rounded-lg shadow mt-4">
            <div className="flex flex-between flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{comment.name}</h4>
                  <time className="text-xs text-gray-500">{comment.date}</time>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditComment(comment.id)}
                    className="text-sm text-blue-500"
                  >
                    <CiEdit className="h-5 w-5 text-hoverTextColor hover:scale-125 duration-300 ease-linear hover:text-iconColor" />
                  </button>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-sm text-red-500"
                  >
                    <IoMdTrash className="h-5 w-5 text-hoverTextColor hover:scale-125 duration-300 ease-linear hover:text-iconColor" />
                  </button>
                </div>
              </div>
              <div className="border-b-[1px] border-black/10 w-full mx-auto"></div>
            </div>
            {editId === comment.id ? (
              <div className="mt-2">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full px-4 py-4 outline-none border-none bg-white text-[14px] rounded-lg"
                />
                <button
                  onClick={handleUpdateComment}
                  className="mt-2 px-4 py-2 w-[160px] text-white text-[14px] bg-hoverTextColor hover:bg-iconColor rounded-[3px]"
                >
                  Update
                </button>
              </div>
            ) : (
              <p className="mt-2">{comment.text}</p>
            )}
            <button
              onClick={() => handleLikeComment(comment.id)}
              className="flex items-center text-gray-600 mt-2"
            >
              <AiFillHeart
                className={`h-5 w-5 ${comment.liked ? "text-red-500" : "text-gray-500"} hover:scale-125 duration-300 ease-linear`}
              />
              <span className="ml-1">{comment.likes}</span>
            </button>

            <button
              onClick={() => handleReply(comment.id)}
              className="text-sm text-blue-500 mt-2"
            >
              Reply
            </button>
            {replyId === comment.id && (
              <div className="mt-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full px-4 py-4 outline-none border-none bg-white text-[14px] rounded-lg"
                />
                <button
                  onClick={() => handlePostReply(comment.id)}
                  className="mt-2 px-4 py-2 w-[160px] text-white text-[14px] bg-hoverTextColor hover:bg-iconColor rounded-[3px]"
                >
                  Post Reply
                </button>
              </div>
            )}
            {comment.replies.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 border-gray-300">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="mt-2">
                    <h4 className="font-semibold text-sm">{reply.name}</h4>
                    <time className="text-xs text-gray-500">{reply.date}</time>
                    <p className="mt-1 text-sm">{reply.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
