import React from "react";

const LandingPage = () => {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-evenly pb-5"
        id="LandingPage"
      >
        <section className="d-flex flex-column" id="LandingPageSection1">
          <div>
            <h1 className="fw-bold">
              Unleash the Power of Simplicity: Solve Com
            </h1>
          </div>
          <div className="py-4">
            <h3>
              Effortlessly tackle intricate mathematical equations and problems
              with our intuitive and visually captivating solving tool.
            </h3>
          </div>
          <button id="LandingPageBtn" className="my-4">
            Join Now
          </button>
        </section>
        <section>
          <img
            src="./images/LandingPageImg.svg"
            alt="LandingPageImg"
            id="LandingPageImg"
          />
        </section>
      </section>
    </>
  );
};

export default LandingPage;
