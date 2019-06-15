import React from "react";

export const AddComment = () => {
  return (
    <div className="add-comment-container">
      <form>
        <input
          type="textarea"
          name="text"
          placeholder="Add Comment..."
          id="exampleText"
        />
      </form>
    </div>
  );
};
