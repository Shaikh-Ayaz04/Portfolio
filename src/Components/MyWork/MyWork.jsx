import { useEffect, useState, useRef } from "react";
import "./MyWork.css";
import theme_pattern from "../../Assets/theme_pattern.svg";
import mywork_data from "../../assets/Projects/mywork_data.js";
import arrow_icon from "../../Assets/arrow_icon.svg";

const MyWork = () => {
  const sectionRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [defaultLimit, setDefaultLimit] = useState(6);
  const [expandedLimit, setExpandedLimit] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDefaultLimit(4);
        setExpandedLimit(4);
      } else {
        setDefaultLimit(6);
        setExpandedLimit(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const projectsToRender = expanded
    ? mywork_data
    : mywork_data.slice(0, defaultLimit);

  const shouldScroll =
    expanded && mywork_data.length > expandedLimit;

  return (
    <div id="work" className="mywork" ref={sectionRef}>
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className={`mywork-container ${shouldScroll ? "scrollable" : ""}`}>
        {projectsToRender.map((work) => (
          <div className="project-card" key={work.w_name}>
            <div className="image-card">
              <img src={work.w_img} alt={work.w_name} />

              {/* GitHub */}
              <a
                href={work.github}
                className="icon github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8
                    169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1
                    0-6.2-.3-40.4-.3-61.4
                    0 0-70 15-84.7-29.8
                    0 0-11.4-29.1-27.8-36.6
                    0 0-22.9-15.7 1.6-15.4
                    0 0 24.9 2 38.6 25.8
                    21.9 38.6 58.6 27.5 72.9 20.9
                    2.3-16 8.8-27.1 16-33.7
                    -55.9-6.2-112.3-14.3-112.3-110.5
                    0-27.5 7.6-41.3 23.6-58.9
                    -2.6-6.5-11.1-33.3 2.6-67.9
                    20.9-6.5 69 27 69 27
                    20-5.6 41.5-8.5 62.8-8.5
                    s42.8 2.9 62.8 8.5
                    c0 0 48.1-33.6 69-27
                    13.7 34.7 5.2 61.4 2.6 67.9
                    16 17.7 25.8 31.5 25.8 58.9
                    0 96.5-58.9 104.2-114.8 110.5
                    9.2 7.9 17 22.9 17 46.4
                    0 33.7-.3 75.4-.3 83.6
                    0 6.5 4.6 14.4 17.3 12.1
                    C428.2 457.8 496 362.9 496 252
                    496 113.3 383.5 8 244.8 8z"
                  />
                </svg>
              </a>

              {/* Live */}
              <a
                href={work.live}
                className="icon live"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M488 0H320a32 32 0 0 0-22.6 54.6
                    l68.7 68.7L131.6 357.8
                    a32 32 0 0 0 0 45.3
                    l22.6 22.6a32 32 0 0 0 45.3 0
                    l234.5-234.5 68.7 68.7
                    A32 32 0 0 0 512 192V24
                    a24 24 0 0 0-24-24z"
                  />
                </svg>
              </a>
            </div>

            <div className="project-title">{work.w_name}</div>
          </div>
        ))}
      </div>

      {mywork_data.length > defaultLimit && (
        <div className="mywork-showmore" onClick={handleToggle}>
          <p>{expanded ? "Show Less" : "Show More"}</p>
          <img
            src={arrow_icon}
            alt=""
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;
