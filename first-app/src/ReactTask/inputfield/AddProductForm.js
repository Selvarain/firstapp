import React, { useState } from "react";
import { Form, Button } from "reactstrap";
import InputField from "./InputField";

const AddProductForm = () => {
  const [inputValue, setInputValue] = useState({ name: ""},{price: "" });
  const { name, price } = inputValue;

  const handleChange = (inputValue) => {
    setInputValue({ name: inputValue, price: inputValue });
    console.log(inputValue);
  };
  return (
    <Form>
      <InputField
        type="text"
        value={name}
        placeholder="Product Name"
        label="Name"
        onChange={handleChange}
      />
      <InputField
        type="number"
        value={price}
        placeholder="Add Price"
        label="Price"
        onChange={handleChange}
      />
      <Button color="primary">Add</Button>{" "}
      <Button color="secondary">Cancel</Button>
    </Form>
  );
};

export default AddProductForm;