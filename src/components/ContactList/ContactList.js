import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { ListStyled } from './ContactList.styled';

export const ContactList = ({ filtered, onDelete }) => {
  return (
    <ListStyled>
      {filtered.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            delId={id}
          />
        );
      })}
    </ListStyled>
  );
};

ContactList.propTypes = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
