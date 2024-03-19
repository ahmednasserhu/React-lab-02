import PropTypes from 'prop-types';

export default function ActionAreaCard({ renderContent, cardTitle }) {
  return (
    <div>
      {cardTitle && <h2>{cardTitle}</h2>}
      {renderContent}
    </div>
  );
}

ActionAreaCard.propTypes = {
  renderContent: PropTypes.node.isRequired,
  cardTitle: PropTypes.string,
};