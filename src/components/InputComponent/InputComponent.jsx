import PropTypes from 'prop-types';
const InputComponent = (props) => {
    const {
        labelText,
        id,
        type,
        placeholder,
        onChange,
        value,
        error
    } = props;
    return (
        <div className="mb-3">
            <label className={error ? "form-label text-danger" : "form-label"} aria-label={labelText} htmlFor={id} id={id}>
                {labelText}
            </label>
            <input
                className={error ? "form-control is-invalid" : "form-control "}
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
};

InputComponent.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string
};

InputComponent.defaultProps = {
    labelText: '',
    id: '',
    type: 'text',
    placeholder: '',
};

export default InputComponent;
