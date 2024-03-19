import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";

export default function ContainedButtons({buttonText}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">{buttonText}</Button>
    </Stack>
  );
}

ContainedButtons.propTypes = {
  buttonText : PropTypes.string.isRequired,
}