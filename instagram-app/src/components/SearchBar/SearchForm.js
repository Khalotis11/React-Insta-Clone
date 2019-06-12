import React from "react";
import { Form, Input } from "reactstrap";

export const SearchForm = () => {
  return (
    <div className="search-form">
      <Form>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search"
        />
      </Form>
    </div>
  );
};
