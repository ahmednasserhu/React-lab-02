import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

function BgColorExample({cardHeader, cardTitle, cardText, isOdd}) {
  const variant = isOdd ? 'secondary ':'dark';
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem', height:'205px' }}
      className="mb-2"
    >
      <Card.Header>{cardHeader}</Card.Header>
      <Card.Body>
        <Card.Title>{variant} {cardTitle}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BgColorExample;

BgColorExample.propTypes = {
  cardHeader: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  isOdd: PropTypes.bool.isRequired,
}
