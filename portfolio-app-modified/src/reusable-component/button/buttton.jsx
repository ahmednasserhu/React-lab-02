import PropTypes from 'prop-types';

export default function ActionAreaButton({ renderContent }) {
  return (
    <div>
      {renderContent}
    </div>
  );
}

ActionAreaButton.propTypes = {
  renderContent: PropTypes.node.isRequired,
};