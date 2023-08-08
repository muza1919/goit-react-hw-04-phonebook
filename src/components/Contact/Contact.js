import PropTypes from 'prop-types';
import { Delete, Item, Text } from './Contact.styled';


export const Contact = ({ name, number, onDelete, delId}) => {
  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Delete onClick={() => onDelete(delId)}>Delete</Delete>
    </Item>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  delId: PropTypes.string.isRequired,
};
