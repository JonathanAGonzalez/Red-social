const InputComponent = ({ labelText, id, type, placeholder, }) => {
    return (
        <div className="mb-3">
            <label className='form-label' htmlFor={id}>{labelText}</label>
            <input className='form-control' type={type} name={id} id={id} placeholder={placeholder} />
        </div>
    )
};

export default InputComponent;
