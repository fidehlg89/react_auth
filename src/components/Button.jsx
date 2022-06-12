const Button =({onClick, actionName})=>{
    return <button onClick={onClick}>Click to {actionName}</button>
}

export default Button