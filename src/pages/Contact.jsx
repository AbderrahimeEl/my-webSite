import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mt-5 d-flex flex-column justify-content-center text-muted align-items-center">
      <h3 className="display-3 mt-5 font-weight-bold text-center">
        You can contact me via:
      </h3>
      <h3 className="fs-3 mt-5 ">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-xl display-3 d-block my-3 text-muted">or</span>

      <h3 className="fs-3 mb-5">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
