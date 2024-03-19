import PropTypes from 'prop-types';

export default function ActionAreaProgressBar({ renderContent }) {
  return (
    <div>
      {renderContent}
    </div>
  );
}

ActionAreaProgressBar.propTypes = {
  renderContent: PropTypes.node.isRequired,
};