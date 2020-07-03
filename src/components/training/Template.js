import React from "react";
import "./Template.scss";

function Template() {
  return (
    <section className="wrapper style5">
        <h1 className="large text-primary">Тестовая верстка</h1>
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
    </section>
  );
}

export default Template;
