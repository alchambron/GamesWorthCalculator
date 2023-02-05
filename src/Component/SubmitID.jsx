import { useState } from "react";
import { Button, Container } from "@mui/material";

export default function Header({ handleID }) {
  const [submitted, setSubmitted] = useState("");

  function validID(id) {
    if (id.length < 5) {
      return false;
    } else {
      return true;
    }
  }

  function handleChange(e) {
    setSubmitted(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleID(submitted);
  }

  return (
    <Container>
      <form onSubmit={validID(submitted) ? handleSubmit : null}>
        <input placeholder="ID Steam" type="text" onChange={handleChange} />
        <Button
          type="submit"
          variant="contained"
          color={submitted.length < 5 ? "error" : "success"}
        >
          {submitted.length < 5 ? "Not Good ID" : "Submit"}
        </Button>
      </form>
    </Container>
  );
}
