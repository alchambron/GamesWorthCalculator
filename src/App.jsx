import React, { useState } from "react";
import SubmitID from "./Component/SubmitID";

export default function App() {
  const [id, setID] = useState("");

  function storeID(event) {
    console.log(event);
  }

  return <SubmitID handleID={(e) => storeID(e)} />;
}
