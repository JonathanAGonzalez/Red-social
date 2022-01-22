import PropTypes from 'prop-types';
const InputComponent = ({
    labelText,
    id,
    type,
    placeholder,
    onChange,
    value,
}) => {
    return (
        <div className="mb-3">
            <label className="form-label" aria-label={labelText} htmlFor={id} id={id}>
                {labelText}
            </label>
            <input
                className="form-control"
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

InputComponent.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

InputComponent.defaultProps = {
    labelText: '',
    id: '',
    type: 'text',
    placeholder: '',
};

export default InputComponent;
