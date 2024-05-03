import React from "react";
function Footer() {
  return (
    <footer className="container-fluid fixed-bottom bg-light">
      <div className="row justify-content-center" style={{ height: 25 }}>
        <div className="col-md-6 text-center">
          <p className="text-xs text-dark">
            Created by{" "}
            <span className="font-weight-bold">Abderrahim Elmoutaouakil</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
