import React from "react";
import { Form, Input } from "reactstrap";

export const SearchForm = () => {
  return (
    <div className="search-form">
      <Form>
        <Input
          type="search"
          name="search"
          className="search-input"
          placeholder="search..."
        />
      </Form>
    </div>
  );
};
