import SingleSkill from "../Single-Skill/SIngleSkill";
import ActionAreaProgressBar from "../../reusable-component/progress-bar/ProgressBar";
import { skills } from "./skills";
import { interests } from "./interests";
import "./Skills.css";
import { useState } from "react";

const Skills = () => {

  const [skillsItems, setSkillsItems] = useState(skills);
  const [interestsItems,setInterestsItems] = useState(interests);

  return (
    <div className="skills-section">
      <div className="skill-list">
        <h1>Skills</h1>
        {skillsItems.map((skill, index) => (
          <ActionAreaProgressBar
            key={index}
            renderContent={<SingleSkill progressRate={skill.progressRate} skillName={skill.skillName} />}
          />
        ))}
      </div>
      <div className='myInterests'>
        <h3>My Interests</h3>
        <hr />
        <ul id="interestsList">
          {interestsItems.map((interest, index) => (
            <li key={index} className="interestsItems">{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
