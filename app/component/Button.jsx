
function Button (props) {
    const {variant, text, ...other} = props
    return(
        <div>
            <button className={variant} {...other}>
                {text}
            </button>
        </div>
        
    )
}
export {Button}