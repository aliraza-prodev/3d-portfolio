import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>SmartComputing</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to Prism, a business intelligence and data
              preparation platform for enterprise analytics and reporting.
              Built and maintained data transformation pipelines to collect,
              clean, and process multi-source data for analytics workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>StepInnSolutions</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Developed hybrid applications combining Laravel REST APIs with
              React.js frontends for a car buy/sell platform with payment
              integrations. Implemented authentication and modular APIs to
              improve security and scalability, and optimized backend queries
              and indexing strategies to improve response time by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PHP/Laravel Developer</h4>
                <h5>FameFing Technologies</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Built a community forum platform using PHP and Bootstrap, where
              users could post questions and other users could comment and
              engage in threaded discussions, similar to Stack Overflow.
              Also contributed to Laravel-based backend improvements to
              maintain performance and code quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
