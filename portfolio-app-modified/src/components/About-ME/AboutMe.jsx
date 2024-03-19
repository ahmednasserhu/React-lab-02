import "./AboutMe.css";
import ActionAreaButton from "../../reusable-component/button/buttton";
import SingleButton from '../Single-Button/SIngleButton'
const AboutMe = () => {
  return (
    <div className="aboutme-section">
      <h1>About me</h1>
      <ActionAreaButton
        renderContent = {<SingleButton buttonText='Download Resume'/>}
      />
      <div className="myinfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        possimus, incidunt totam ratione magni illo, aut necessitatibus,
        reiciendis culpa eos vitae. Aut ipsum animi vel quis quasi eius ad
        soluta, incidunt, sunt quos beatae rem perspiciatis odit tenetur
        asperiores qui dolor! Nam rerum, repellendus consequuntur, deleniti
        provident reprehenderit, eveniet mollitia nulla commodi ullam
        dignissimos accusamus eaque! Nostrum, at magni ut delectus id quia
        doloribus est voluptatem, culpa illo dolores omnis corrupti vero.
        Excepturi dicta perferendis accusamus iste laborum quidem quasi.
      </div>
    </div>
  );
};

export default AboutMe;
