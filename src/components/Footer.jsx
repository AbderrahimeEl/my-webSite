import React from "react";

function Footer() {
  return (
    <footer className="container-fluid fixed-bottom bg-light">
      <div className="row justify-content-center" style={{height : 30}}>
        <div className="col-md-6 text-center">
          <p className="text-xs text-dark">
            Created by{" "}
            <span className="font-weight-bold">Abderrahim Elmoutaouakil</span>{" "}
            with <span className="text-gradient font-weight-bold">Love</span> &{" "}
            <span className="text-gradient font-weight-bold">Fun</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
