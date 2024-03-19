import ActionAreaCard from "../../reusable-component/card/Card";
import SingleCard from "../Single-Card/Single-Card";
import profileImage from "../../assets/profile.jpg";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <ActionAreaCard
        renderContent={
          <SingleCard
            image={profileImage}
            title="User Card"
            description="description for the main profile card"
          />
        }
      />
    </div>
  );
};

export default HeroSection;
