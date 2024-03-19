import PortfolioCard from "../PortfolioCard/PortfolioCrad";
import ActionAreaCard from "../../reusable-component/card/Card";
import { portfolioItems } from "./portfolioItems";
import "./Portfolio.css";
import { useState } from "react";

const Portfolio = () => {
  const [portfolioElements, setPortfolioElements] = useState(portfolioItems);

  return (
    <div className="Portfolio-Section">
      {portfolioElements.map((item, index) => (
        <div className="row-style" key={index}>
          <ActionAreaCard
            renderContent={
              <PortfolioCard
                cardHeader={item.cardHeader}
                cardTitle={item.cardTitle}
                cardText={item.cardText}
                isOdd = {index % 2 !== 0}
              />
            }
          />
        </div>
      ))}
    </div>
    )
};

export default Portfolio;
