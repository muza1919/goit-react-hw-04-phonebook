import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ onInput }) => {
    return (
        <label>
             Find contacts by Name
            <FilterInput type="text" name="filter" onChange={e => onInput(e)}></FilterInput>
        </label>
    );
};

Filter.propTypes = {
    onInput: PropTypes.func.isRequired,
}