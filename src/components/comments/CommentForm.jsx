import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);
  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  const handleChange = (event) => {
    const comment = event.target.value;

    setValue(comment);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col border border-primary items-end p-4 rounded-lg">
        <textarea
          className="focus:outline-none w-full bg-transparent"
          placeholder="Leave your comment here..."
          rows="5"
          value={value}
          onChange={handleChange}
        />
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 mt-2 rounded-lg bg-red-500 text-white font-bold"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="py-2.5 px-6 font-semibold text-white bg-primary rounded-lg mt-2"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
