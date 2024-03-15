
function IconButton (props) {
    const {children, ...other} = props
    return(
        <button {...other}>
            {children}
        </button>
    )
}
export {IconButton}