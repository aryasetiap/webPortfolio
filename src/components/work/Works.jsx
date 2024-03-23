import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleFilterClick = (itemName) => {
    setItem({ name: itemName });
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => {
          return (
            <span
              className={`work__item ${
                item.name === navItem.name ? "active" : ""
              }`}
              key={navItem.name}
              onClick={() => handleFilterClick(navItem.name)}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((project) => {
          return <WorkItems key={project.id} item={project}></WorkItems>;
        })}
      </div>
    </div>
  );
};

export default Works;
