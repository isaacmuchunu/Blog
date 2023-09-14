import React, { useState } from "react";

const CommentForm = ({btnLabel}) => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const comment = event.target.value;

    setValue(comment);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col border border-primary items-end p-4 rounded-lg">
        <textarea
          className="focus:outline-none w-full"
          placeholder="Leave your comment here..."
          rows="5"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="py-2.5 px-6 font-semibold text-white bg-primary rounded-lg mt-2">
            {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
