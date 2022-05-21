import Button from "../Components/Button"

const onClickHandler = () => (console.log('Cliked btn to get registered'))
const Register = () => {
    return (<div>Hello from Register
        <Button onClick={onClickHandler} actionName={'Register'} />
    </div>)
}

export default Register