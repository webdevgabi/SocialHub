
export default ({id, title, ...props}) => {
    return (
        <div className="input">
            <label htmlFor={id}>{title}</label>
            <input id={id} {...props}  />
        </div>
    )
}